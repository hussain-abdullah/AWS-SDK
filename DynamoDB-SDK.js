//This code runs using AWS SDK V3
//Replace ##### with a table name
'use strict'
import { GetItemCommand } from "@aws-sdk/client-dynamodb";
import { DynamoDBClient, BatchGetItemCommand } from "@aws-sdk/client-dynamodb";
const ddbClient = new DynamoDBClient({region: 'us-east-1'});
import { ScanCommand } from "@aws-sdk/client-dynamodb";

const scanItem = async () =>{
        const params = {
            TableName: "#####"
    }
try {
  const data = await ddbClient.send(new ScanCommand(params));
  console.log(data.Items);
} catch (err) {
  console.log("Error", err);
}
}
scanItem();
