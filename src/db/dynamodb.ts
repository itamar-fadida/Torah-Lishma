import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({ region: process.env.AWS_REGION });
export const ddbDocClient = DynamoDBDocumentClient.from(client);

// Use it in:
// All your Lambda handlers

// API routes (if using REST/GraphQL)

// Utility functions that talk to DynamoDB