const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");

const prisma = new PrismaClient();

async function main() {
    const hashedPassword = await bcrypt.hash("123456qAz", 10);
    const users = await prisma.user.createMany({
        data: [
            {
                firstname: "",
                lastname: "",
                email: "",
                emailVerified: new Date(),
                password: hashedPassword,
            },
            {
                firstname: "",
                lastname: "",
                email: "",
                emailVerified: new Date(),
                password: hashedPassword,
            },
        ],
        skipDuplicates: true,
    });

    console.dir(users, { depth: null });
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
