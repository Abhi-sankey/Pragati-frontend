import { useState } from 'react';
import { useUsers, useCreateUser, useDeleteUser } from '../hooks/useUsers';
import { UserList } from '../components/UserList';
import { AddUserModal } from '../components/AddUserModal';
import { Plus } from 'lucide-react';
import type { CreateUserDTO } from '../types';

export const UsersPage = () => {
    const { data: users, isLoading, isError } = useUsers();
    const createUserMutation = useCreateUser();
    const deleteUserMutation = useDeleteUser();

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCreateUser = async (userData: CreateUserDTO) => {
        await createUserMutation.mutateAsync(userData);
        setIsModalOpen(false);
    };

    return (
        <div className="py-8 px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-xl font-semibold text-gray-900">Users</h1>
                    <p className="mt-2 text-sm text-gray-700">
                        A list of all the users in your account including their name, role, email and status.
                    </p>
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                    <button
                        type="button"
                        onClick={() => setIsModalOpen(true)}
                        className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                    >
                        <Plus className="h-4 w-4 mr-2" />
                        Add User
                    </button>
                </div>
            </div>

            <div className="mt-8 flex flex-col">
                <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        {isLoading ? (
                            <div className="text-center py-8">Loading users...</div>
                        ) : isError ? (
                            <div className="text-center py-8 text-red-500">Error loading users.</div>
                        ) : (
                            <UserList
                                users={users || []}
                                onDelete={(id) => deleteUserMutation.mutate(id)}
                                isDeleting={deleteUserMutation.isPending}
                            />
                        )}
                    </div>
                </div>
            </div>

            <AddUserModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSubmit={handleCreateUser}
                isSubmitting={createUserMutation.isPending}
            />
        </div>
    );
};
