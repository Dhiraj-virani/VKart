import bcrypt from 'bcryptjs'

const users =[
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('1445', 10),
        isAdmin: true
    },
    {
        name: 'Dhiraj Virani',
        email: 'dhiraj@example.com',
        password: bcrypt.hashSync('1445', 10),
    },
    {
        name: 'Devan Patel',
        email: 'devan@example.com',
        password: bcrypt.hashSync('1445', 10),
    },
    {
        name: 'Manish Jain',
        email: 'manish@example.com',
        password: bcrypt.hashSync('1445', 10),
    }
]

export default users