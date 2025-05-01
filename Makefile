create-tables-dev:
	RUNTIME_ENV=dev ts-node src/scripts/create-tables.ts

# Create all DynamoDB tables for test
create-tables-test:
	RUNTIME_ENV=test ts-node src/scripts/create-tables.ts

create-tables-prod:
	RUNTIME_ENV=dev ts-node src/scripts/create-tables.ts

test:
	VITEST_CONFIG=vitest.config.ts vitest run
