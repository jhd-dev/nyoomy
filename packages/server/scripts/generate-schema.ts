#!/usr/bin/env ts-node

import { NestFactory } from '@nestjs/core';
import {
    GraphQLSchemaBuilderModule,
    GraphQLSchemaFactory,
} from '@nestjs/graphql';
import { writeFile } from 'fs';
import { printSchema } from 'graphql';
import { AuthResolver } from '../src/modules/auth/auth.resolver';
import { UserResolver } from '../src/modules/user/user.resolver';
import type { GraphQLSchema } from 'graphql';

// eslint-disable-next-line @typescript-eslint/ban-types
const RESOLVERS: Function[] = [AuthResolver, UserResolver];

async function generateSchema(): Promise<void> {
    const app = await NestFactory.create(GraphQLSchemaBuilderModule, {
        logger: false,
    });
    await app.init();

    const gqlSchemaFactory = app.get(GraphQLSchemaFactory);
    const p: Promise<GraphQLSchema> = gqlSchemaFactory.create(RESOLVERS);

    const schema: GraphQLSchema = await p;
    const schemaText: string = printSchema(schema);

    // eslint-disable-next-line promise/prefer-await-to-callbacks
    writeFile('schema.graphql', schemaText, 'utf8', (err) => {
        if (err != null) {
            console.error(err.message);
        }
    });
}

void generateSchema();
