"use strict";
/* Prisma Client Mock */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Prisma = exports.PrismaClient = void 0;
class PrismaClient {
    user;
    constructor() {
        this.user = {
            create: async (data) => {
                console.log('User created:', data);
                return { id: 1, ...data };
            },
            findMany: async () => {
                console.log('Finding all users');
                return [];
            },
            findUnique: async (where) => {
                return null;
            },
            update: async (data) => {
                return data;
            },
            delete: async (where) => {
                return null;
            },
        };
    }
    $connect = async () => {
        console.log('Prisma connected');
    };
    $disconnect = async () => {
        console.log('Prisma disconnected');
    };
}
exports.PrismaClient = PrismaClient;
exports.Prisma = {};
exports.default = PrismaClient;
//# sourceMappingURL=generated.js.map