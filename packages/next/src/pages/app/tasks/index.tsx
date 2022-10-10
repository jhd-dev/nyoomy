import { Dialog, Transition } from '@headlessui/react';
import { PlusIcon } from '@radix-ui/react-icons';
import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Fragment, useState } from 'react';
import { trpc } from '../../../utils/trpc';

const TasksPage: NextPage = () => {
  const {
    data: todoOccurrences,
    error,
    isLoading,
  } = trpc.todo.getTodoItems.useQuery();

  const router = useRouter();

  const { data: newTodoData, mutate: createTodoItem } =
    trpc.todo.createTodoItem.useMutation();

  return (
    <div>
      <div>
        {todoOccurrences?.map((occurrence) => (
          <Link
            key={occurrence.id}
            href="/app/tasks/[articleId]"
            as={`/app/tasks/${occurrence.todo.id}`}
            scroll={false}
          >
            <a>
              {occurrence.todo.title} - {occurrence.todo.id}
            </a>
          </Link>
        ))}
      </div>

      <div className="fixed inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={() => createTodoItem()}
          className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          <PlusIcon />
          Create Todo Item
        </button>
      </div>
    </div>
  );
};

export default TasksPage;
