{
  // Use IntelliSense to learn about possible attributes.
  // Hover to view descriptions of existing attributes.
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Note: Results debugger",
      "type": "node",
      "request": "attach",
      "port": 9229,
      "address": "localhost",
      "skipFiles": [
        "<node_internals>/**"
      ],
      "remoteRoot": "/app",
      "localRoot": "${workspaceFolder}/result"
    }
  ]
}
