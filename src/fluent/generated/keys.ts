import "@servicenow/sdk/global";

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                        "cs0": {
                            "table": "sys_script_client",
                            "id": "b3f6b59f9a474f2d8744c09c962d6a22"
                        },
                        "src_server_script_ts": {
                            "table": "sys_module",
                            "id": "fe6e18fabc6c42bdb338803fa2fad798"
                        },
                        "br0": {
                            "table": "sys_script",
                            "id": "de8d9ed44ca94c3d8017cca1203c21f7"
                        },
                        "package_json": {
                            "table": "sys_module",
                            "id": "ab3834f68cd34f65b074a3af8556f8ea"
                        }
                    };
                composite: [
                        {
                            "table": "sys_module",
                            "id": "551b4fa08c3d46caa99c712725bc4fed",
                            "key": {
                                "module": "lodash.snakecase@4.1.1",
                                "file": "index.js"
                            }
                        },
                        {
                            "table": "sys_module",
                            "id": "4175266a5dd349889e71b3f91d585f81",
                            "key": {
                                "module": "lodash.snakecase@4.1.1",
                                "file": "cyclonedx/bom.json"
                            }
                        },
                        {
                            "table": "sys_module",
                            "id": "8c295e7bcf9b4f87aefd6819c8982a1c",
                            "key": {
                                "module": "lodash.snakecase@4.1.1",
                                "file": "package.json"
                            }
                        }
                    ];
            }
        }
    }
}
