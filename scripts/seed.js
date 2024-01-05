const { db } = require("@vercel/postgres");

async function seedUsers(client) {
    try {
        await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
        // Создаём таблицу users, если она не существует
        const createTable = await client.sql`
            CREATE TABLE IF NOT EXISTS chat_users (
                id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
                image TEXT,
                firstname VARCHAR(255) NOT NULL,
                lastname VARCHAR(255) NOT NULL,
                email TEXT NOT NULL UNIQUE,
                password TEXT NOT NULL
            );
        `;
        console.log('Создана таблица "chat_users"');

        return createTable;
    } catch (error) {
        console.error('Ошибка создания таблицы "chat_users"', error);
        throw error;
    }
}

async function seedChats(client) {
    try {
        await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
        // Создаем таблицу chats, если она не существует
        const createTable = await client.sql`
            CREATE TABLE IF NOT EXISTS chat_chats (
                id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                image TEXT
            );
        `;
        console.log('Создана таблица "chat_chats"');

        return createTable;
    } catch (error) {
        console.error('Ошибка создания таблицы "chat_chats"', error);
        throw error;
    }
}

async function seedMessages(client) {
    try {
        await client.sql`CREATE EXTENSION IS NOT EXISTS "uuid-ossp"`;
        const createTable = await client`
            CREATE TABLE IS NOT EXISTS chat_messages (
                id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
                chat_id UUID NOT NULL,
                user_id UUID NOT NULL,
                content TEXT NOT NULL,
                timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `;
        console.log('Создана таблица "chat_messages"');

        return createTable;
    } catch (error) {
        console.error('Ошибка создания таблицы "chat_messages"', error);
        throw error;
    }
}

async function seedChatMembers(client) {
    try {
        await client.sql`CREATE EXTENSION IS NOT EXISTS "uuid-ossp"`;
        const createTable = await client.sql`
            CREATE TABLE IS NOT EXISTS chat_members (
                chat_id UUID NOT NULL,
                user_id UUID NOT NULL
            );
        `;
        console.log('Создана таблица "chat_members"');

        return createTable;
    } catch (error) {
        console.error('Ошибка создания таблицы "chat_members"', error);
        throw error;
    }
}

async function seedNotifications(client) {
    try {
        await client.sql`CREATE EXTENSION IS NOT EXISTS "uuid-ossp"`;
        const createTable = await client.sql`
            CREATE TABLE IS NOT EXISTS chat_notifications (
                id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
                user_id UUID NOT NULL,
                content TEXT NOT NULL,
                timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `;
        console.log('Создана таблица "chat_notifications"');

        return createTable;
    } catch (error) {
        console.error('Ошибка создания таблицы "chat_notifications"', error);
        throw error;
    }
}

async function main() {
    const client = await db.connect();

    await seedUsers(client);
    await seedChats(client);
    await seedMessages(client);
    await seedChatMembers(client);
    await seedNotifications(client);

    await client.end();
}

main().catch((err) => {
    console.error(
        "Произошла ошибка при попытке создать таблицы в базе данных",
        err
    );
});
