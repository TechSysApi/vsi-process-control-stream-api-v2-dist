var variables={
  "name": "@ch-post/vsi-process-control-stream-api-v2",
  "version": "7.1.0-feature-add-location-key.2",
  "description": "API definition - Interaction between Machine Control and Reading Coding System - CEN/TS 16238 v2",
  "scripts": {
    "start": "apikana start src dist",
    "stop": "apikana stop",
    "create-sample": "apikana create-sample",
    "validate-samples": "apikana validate-samples",
    "test": "eslint src --ext .ts && apikana validate-samples",
    "lint": "eslint src --ext .ts",
    "lint-fix": "eslint src --ext .ts --fix"
  },
  "author": "herzamk",
  "license": "Apache-2.0",
  "devDependencies": {
    "apikana": "^0.9.25",
    "apikana-defaults": "0.0.77",
    "@typescript-eslint/eslint-plugin": "^4.33.0",
    "@typescript-eslint/parser": "^4.33.0",
    "eslint": "^7.17.0",
    "eslint-config-prettier": "^7.1.0",
    "eslint-plugin-prettier": "^3.3.1",
    "prettier": "^2.2.1",
    "typescript": "^4.1.3"
  },
  "customConfig": {
    "type": "stream-api",
    "domain": "post.ch",
    "author": "herzamk",
    "namespace": "app.techsys.vsi.process.control.v2",
    "shortName": "vsi-process-control-v2",
    "projectName": "vsi-process-control-stream-api-v2",
    "npmPackage": "@ch-post/vsi-process-control-stream-api-v2",
    "title": "VSI Process Control Stream API v2",
    "plugins": [
      "dotnet",
      "readme"
    ],
    "dotnetNamespace": "Ch.Post.PL.Api.VsiProcessControl.V2",
    "dotnetPackageId": "Ch.Post.PL.Api.VsiProcessControl.V2",
    "mqs": "MQTT"
  },
  "_": [
    "start",
    "src",
    "dist"
  ]
}