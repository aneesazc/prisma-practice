import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

interface UserTypes {
    username: string;
    password: string;
    firstName: string;
    lastName: string;
}

async function insertUser({username, password, firstName, lastName}: UserTypes) {
    const res = await prisma.user.create({
        data: {
            username,
            password,
            firstName,
            lastName
        }
    })
    console.log(res)
}

const user1 = {
    username: "jimhalpert",
    password: "password",
    firstName: "jim",
    lastName: "halpert",
}

// insertUser(user1)
async function findUser(username: string) {
    const res = await prisma.user.findUnique({
        where: {
            username
        }
    })
    console.log(res)
}

// findUser("janedoe")
type UpdateTypes = Pick<UserTypes, "firstName" | "lastName">
async function updateUser(username: string, {firstName, lastName}: UpdateTypes) {
    const res = await prisma.user.update({
        data: {
            firstName,
            lastName
        },

        where: {
            username          
        }
    })
    console.log(res)
}

// updateUser("janedoe", {firstName: "janeydoe", lastName: "Doe"})

async function createTodo(userId: number, title: string, description: string) {
    const todos = await prisma.todo.create({
        data: {
            userId,
            title,
            description
        }
    })
}

// createTodo(3, "movie", "watch a movie");

async function getTodos(userId: number, ) {
    const todos = await prisma.todo.findMany({
        where: {
        userId: userId,
        },
    });
    console.log(todos);
}

// getTodos(3);

async function getTodosAndUserDetails(userId: number, ) {
    const res = await prisma.todo.findMany({
        where: {
            userId
        },
        select: {
            id: true,
            title: true,
            description: true,
            done: true,
            // userId: true,
            user: true
        }

    })
    console.log(res)
}

// getTodosAndUserDetails(1);




async function getUserAndTodos(userId: number) {
    const res = await prisma.user.findUnique({
        where: {
            id: userId
        },
        select: {
            id: true,
            username: true,
            // password: true,
            firstName: true,
            lastName: true,
            todos: { // only true works as well
                select: {
                    id: true,
                    title: true,
                    description: true,
                    done: true,
                }
            }
        }
    })
    console.log(res)
}

getUserAndTodos(1);
