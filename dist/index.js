"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function insertUser(_a) {
    return __awaiter(this, arguments, void 0, function* ({ username, password, firstName, lastName }) {
        const res = yield prisma.user.create({
            data: {
                username,
                password,
                firstName,
                lastName
            }
        });
        console.log(res);
    });
}
const user1 = {
    username: "jimhalpert",
    password: "password",
    firstName: "jim",
    lastName: "halpert",
};
// insertUser(user1)
function findUser(username) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.findUnique({
            where: {
                username
            }
        });
        console.log(res);
    });
}
function updateUser(username_1, _a) {
    return __awaiter(this, arguments, void 0, function* (username, { firstName, lastName }) {
        const res = yield prisma.user.update({
            data: {
                firstName,
                lastName
            },
            where: {
                username
            }
        });
        console.log(res);
    });
}
// updateUser("janedoe", {firstName: "janeydoe", lastName: "Doe"})
function createTodo(userId, title, description) {
    return __awaiter(this, void 0, void 0, function* () {
        const todos = yield prisma.todo.create({
            data: {
                userId,
                title,
                description
            }
        });
    });
}
// createTodo(3, "movie", "watch a movie");
function getTodos(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const todos = yield prisma.todo.findMany({
            where: {
                userId: userId,
            },
        });
        console.log(todos);
    });
}
// getTodos(3);
function getTodosAndUserDetails(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.todo.findMany({
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
        });
        console.log(res);
    });
}
// getTodosAndUserDetails(1);
function getUserAndTodos(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.findUnique({
            where: {
                id: userId
            },
            select: {
                id: true,
                username: true,
                // password: true, // Consider excluding sensitive data like passwords in real applications
                firstName: true,
                lastName: true,
                todos: true
            }
        });
        console.log(res);
    });
}
getUserAndTodos(1);
