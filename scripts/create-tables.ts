import { CreateTableCommand, DynamoDBClient } from '@aws-sdk/client-dynamodb';
import * as dotenv from 'dotenv';

dotenv.config({ path: `.env.${process.env.NODE_ENV}` }); // Loads .env or .env.production

//in cli: NODE_ENV=production ts-node src/scripts/create-tables.ts
// This resolves to:  dotenv.config({ path: '.env.production' });

const ddbClient = new DynamoDBClient({ region: process.env.AWS_REGION });

const tables = [
  {
    TableName: process.env.TABLE_RABBIS,
    AttributeDefinitions: [{ AttributeName: 'id', AttributeType: 'S' as const }],
    KeySchema: [
      { AttributeName: 'id', KeyType: 'HASH' as const },
      { AttributeName: 'seriesId', KeyType: 'HASH' as const },
    ],
    BillingMode: 'PAY_PER_REQUEST' as const,
  },
];

async function createTables() {
  for (const table of tables) {
    try {
      const command = new CreateTableCommand({
        ...table,
      });
      await ddbClient.send(command);
      console.log(`✅ Created table: ${table.TableName}`);
    } catch (err) {
      console.error(`❌ Failed to create ${table.TableName}`, err);
    }
  }
}

createTables();

// ts-node src/scripts/create-tables.ts
