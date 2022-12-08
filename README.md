# AWS-SDK

In PowerShell write the following commands to install the following:
Choco:
$ Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))

Node.js:
$ choco install -y nodejs-lts

AWS CLI V2:
$ msiexec.exe /i https://awscli.amazonaws.com/AWSCLIV2.msi

$ aws configure
AWS Access Key ID [None]:[Enter your aws access key]
AWS Secret Access Key [None]: [Enter your aws private key]
Default region name [None]: us-east-1
Default output format [None]: json

Yarn:
$ npm install --global yarn:

PNPM:
iwr https://get.pnpm.io/install.ps1 -useb | iex

Check the installation of each tool using:
$ [tool name] --version

In this tutorial we will run scan items from a table using AWS SDK v3
In Visual Studio terminal, run these commands:
$ npm init -y
$ npm install @aws-sdk/client-dynamodb
$ yarn add @aws-sdk/client-dynamodb
$ pnpm add @aws-sdk/client-dynamodb

At pakage.json add:
{
 //,
 "type":"module",
 //
}

Run the file using the following command:
node [filename].js
