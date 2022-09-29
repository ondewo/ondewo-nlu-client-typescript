<p align="center">
  <a href="https://www.ondewo.com">
    <img alt="ONDEWO Logo" src="https://raw.githubusercontent.com/ondewo/ondewo-logos/master/github/ondewo_logo_github_2.png"/>
  </a>
  <h1 align="center">
    ONDEWO NLU Client TypeScript
  </h1>
  <p align="center">
    <a href="https://badge.fury.io/js/%40ondewo%2Fnlu-client-typescript"><img src="https://badge.fury.io/js/%40ondewo%2Fnlu-client-typescript.svg" alt="npm version" height="32"></a>
  </p>
</p>

## Overview

`@ondewo/nlu-client-typescript` is a compiled version of the [ONDEWO NLU API](https://github.com/ondewo/ondewo-nlu-api). Here you can find the NLU API [documentation](https://ondewo.github.io).

## Setup

Using NPM:

```shell
npm i --save @ondewo/nlu-client-typescript
```

Using GitHub:

```shell
git clone https://github.com/ondewo/ondewo-nlu-client-typescript.git ## Clone repository
cd ondewo-nlu-client-typescript                                      ## Change into repo-directoy
npm i                                                               ## Install dependencies
```
## Package structure
```
npm
├── api
│   ├── google
│   │   ├── api
│   │   │   ├── annotations_pb.d.ts
│   │   │   └── annotations_pb.js
│   │   ├── protobuf
│   │   │   ├── any_pb.d.ts
│   │   │   ├── any_pb.js
│   │   │   ├── empty_pb.d.ts
│   │   │   ├── empty_pb.js
│   │   │   ├── field_mask_pb.d.ts
│   │   │   ├── field_mask_pb.js
│   │   │   ├── struct_pb.d.ts
│   │   │   ├── struct_pb.js
│   │   │   ├── timestamp_pb.d.ts
│   │   │   └── timestamp_pb.js
│   │   ├── rpc
│   │   │   ├── status_pb.d.ts
│   │   │   └── status_pb.js
│   │   └── type
│   │       ├── latlng_pb.d.ts
│   │       └── latlng_pb.js
│   └── ondewo
│       ├── nlu
│       │   ├── agent_grpc_web_pb.d.ts
│       │   ├── agent_grpc_web_pb.js
│       │   ├── agent_pb.d.ts
│       │   ├── agent_pb.js
│       │   ├── aiservices_grpc_web_pb.d.ts
│       │   ├── aiservices_grpc_web_pb.js
│       │   ├── aiservices_pb.d.ts
│       │   ├── aiservices_pb.js
│       │   ├── ...
│       └── qa
│           ├── qa_grpc_web_pb.d.ts
│           ├── qa_grpc_web_pb.js
│           ├── qa_pb.d.ts
│           └── qa_pb.js
├── LICENSE
├── package.json
├── public-api.d.ts
└── README.md
```
[comment]: <> (START OF GITHUB README)
## Build

The `make build` command is dependent on 2 `repositories` and their specified `version`:
  - [ondewo-nlu-api](https://github.com/ondewo/ondewo-nlu-api) -- `NLU_API_GIT_BRANCH` in `Makefile`
  - [ondewo-proto-compiler](https://github.com/ondewo/ondewo-proto-compiler) -- `ONDEWO_PROTO_COMPILER_GIT_BRANCH` in `Makefile`

Other than creating the proto-code, `build` also installs the `dev-dependencies` and changes the owner of the proto-code-files from `root` to the `current user`.

In the case that some `google .protos` were not automatically generated, exists the option of creating a `proto-deps.txt` inside the `src` folder. There, import statements can be written the same way as they are in `.proto` files.
  ```
  import "google/api/http.proto"; //Example
    <---- New Line
  ```
> :warning: The last line in the `proto-deps.txt` needs to be an empty new line, otherwise the compiler will fail

## GitHub Repository - Release Automation

The repository is published to GitHub and NPM by the Automated Release Process of ONDEWO.

TODO after PR merge:
- checkout master
  ```shell
  git checkout master
  ```
- pull the newest state
  ```shell
  git pull
  ```
- Adjust `ONDEWO_NLU_VERSION` in the `Makefile` <br><br>
- Add new Release Notes to `src/RELEASE.md` in following format:
  ```
  ## Release ONDEWO NLU Typescript Client X.X.X    <----- Beginning of Notes

  ...<NOTES>...

  *****************                             <----- End of Notes
  ```
- release
  ```shell
  make ondewo_release
  ```
<br>
The release process can be divided into 6 Steps:

1. `build` specified version of the `ondewo-nlu-api`
2. `commit and push` all changes in code resulting from the `build`
3. Publish the created `npm` folder to `npmjs.com`
4. Create and push the `release branch` e.g. `release/1.3.20`
5. Create and push the `release tag` e.g. `1.3.20`
6. Create a new `Release` on GitHub

> :warning:  The Release Automation checks if the build has created all the proto-code files, but it does not check the code-integrity. Please build and test the generated code prior to starting the release process.

:shipit:

[comment]: <> (END OF GITHUB README)
