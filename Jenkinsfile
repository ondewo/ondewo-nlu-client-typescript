pipeline {
    agent any
    parameters {
        string(name: 'ONDEWO_NLU_CLIENT_TYPESCRIPT', defaultValue: 'ondewo-nlu-client-typescript', description: 'root')
        string(name: 'ONDEWO_PROTO_COMPILER', defaultValue: 'ondewo-proto-compiler', description: 'Repo for proto compiler docker image')
        string(name: 'ONDEWO_NLU_API', defaultValue: 'ondewo-nlu-api', description: 'Git submodule for nlu api')
        string(name: 'ONDEWO_TEST_DIR', defaultValue: 'ondewo-test', description: 'Directory for newly created client app')
        string(name: 'GOOGLE_PROTOS_DIR', defaultValue: 'googleapis/google/', description: 'Directory for google proto files')
        string(name: 'GITHUB_TOKEN', defaultValue: '', description: '')
        string(name: 'ONDEWO_USER', defaultValue: 'ondewo', description: 'Github user hosting the repositories')
        string(name: 'BRANCH_TO_PULL', defaultValue: 'master', description: 'Create pull request for this branch ath the end')
        string(name: 'BRANCH_NAME', defaultValue: '', description: 'Branch name of the nlu api repository to checkout')
        string(name: 'BRANCH_NAME_STARTS', defaultValue: 'release', description: 'Build only branches that start with this substring')
    }
    
            
    stages {
        stage('Branch check') {
            when {
                expression {
                    return !(params.BRANCH_NAME ==~ /.*${params.BRANCH_NAME_STARTS}.*/)
                }
            }
            steps {
                error "Branch ${params.BRANCH_NAME} is ingored"
            }
        }
        stage('Build') {
            environment {
                BRANCH_NAME = "${(params.BRANCH_NAME =~ /.*(${params.BRANCH_NAME_STARTS}.*)/)[0][1]}"
            }
            steps {
                sh """
                    echo "Working with branch ${BRANCH_NAME}";
                    rm -rf ${params.ONDEWO_NLU_CLIENT_TYPESCRIPT};
                    git clone -b ${params.BRANCH_TO_PULL} https://${params.GITHUB_TOKEN}@github.com/${params.ONDEWO_USER}/${params.ONDEWO_NLU_CLIENT_TYPESCRIPT}.git;
                    if [ ! -d ${params.ONDEWO_PROTO_COMPILER} ]; then \
                      git clone https://${params.GITHUB_TOKEN}@github.com/${params.ONDEWO_USER}/${params.ONDEWO_PROTO_COMPILER}.git;
                    fi; 
                    docker build --network=host -t ondewo-typescript-proto-compiler ./${params.ONDEWO_PROTO_COMPILER}/typescript;
                    mkdir -p ${params.ONDEWO_TEST_DIR};
                    cd ${params.ONDEWO_NLU_CLIENT_TYPESCRIPT};
                    git config --file=.gitmodules submodule.src/${params.ONDEWO_NLU_API}.url https://${params.GITHUB_TOKEN}@github.com/${params.ONDEWO_USER}/${params.ONDEWO_NLU_API}.git;
                    git submodule sync;
                    git submodule update --init;
                    cd src/${params.ONDEWO_NLU_API};
                    git checkout ${BRANCH_NAME};
                    cd ../..;
                    GOOGLE_DIR_BASE=`basename ${params.GOOGLE_PROTOS_DIR}`;
                    mv src/${params.ONDEWO_NLU_API}/${params.GOOGLE_PROTOS_DIR} src/${params.ONDEWO_NLU_API}/\${GOOGLE_DIR_BASE};
                    CONTAINER_NAME=`basename ${BRANCH_NAME}`;
                    docker run --rm \
                      -v ${WORKSPACE}/${params.ONDEWO_NLU_CLIENT_TYPESCRIPT}/src:/input-volume \
                      -v ${WORKSPACE}/${params.ONDEWO_TEST_DIR}:/output-volume \
                      ondewo-typescript-proto-compiler ${params.ONDEWO_NLU_API};
                    mv src/${params.ONDEWO_NLU_API}/\${GOOGLE_DIR_BASE} src/${params.ONDEWO_NLU_API}/${params.GOOGLE_PROTOS_DIR};
                """
            }
        }
        stage('Test') {
            steps {
                sh """
                    cd ${params.ONDEWO_NLU_CLIENT_TYPESCRIPT};
                    ./test_ts_files ../${params.ONDEWO_TEST_DIR} .
                """
            }
        }
        stage('Deploy') {
            environment {
                BRANCH_NAME = "${(params.BRANCH_NAME =~ /.*(${params.BRANCH_NAME_STARTS}.*)/)[0][1]}"
            }
            steps {
                echo 'Test passed, commit changes'
                sh """
                    cd ${params.ONDEWO_NLU_CLIENT_TYPESCRIPT};
                    git checkout -f ${BRANCH_NAME} || git checkout -b ${BRANCH_NAME};
                    cp -rf ../${params.ONDEWO_TEST_DIR}/* .
                    git add package* public* api src;
                    git config --global user.name 'jenkins';
                    git config --global user.email 'jenkins@jenkins.com';
                    git commit -m "update api and client files";
                    git push --set-upstream origin ${BRANCH_NAME};
                """
            }
        }
        stage('Create pull request') {
            environment {
                BRANCH_NAME = "${(params.BRANCH_NAME =~ /.*(${params.BRANCH_NAME_STARTS}.*)/)[0][1]}"
            }
            steps {
                echo "Create pull request ${BRANCH_NAME} --> ${params.BRANCH_TO_PULL}"
                sh """
                    curl \
                    -X POST \
                    -H "Accept: application/vnd.github.v3+json" \
                     https://${params.GITHUB_TOKEN}@api.github.com/repos/${params.ONDEWO_USER}/${params.ONDEWO_NLU_CLIENT_TYPESCRIPT}/pulls \
                    -d '{"head": "${BRANCH_NAME}", "base": "${params.BRANCH_TO_PULL}", "title": "generated from jenkins pipeline: ${BRANCH_NAME}"}';
                """
            }
        }
    }
}
