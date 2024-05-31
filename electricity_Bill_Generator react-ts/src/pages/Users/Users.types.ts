export interface UsersProps { }

export interface UserData {
    id: string
    role?: {
        roleName: string
        isDeleted: boolean
        createdAt: string
        updatedAt: string
    }
    fullName: string
    email: string
    password?: string
    location: string
    isDeleted: boolean
    createdAt: string
    updatedAt: string
}