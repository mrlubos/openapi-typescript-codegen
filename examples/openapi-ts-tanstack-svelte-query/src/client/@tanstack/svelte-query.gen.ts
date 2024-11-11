// This file is auto-generated by @hey-api/openapi-ts

import type { Options } from '@hey-api/client-fetch';
import {
  type DefaultError,
  type MutationOptions,
  queryOptions,
} from '@tanstack/svelte-query';

import {
  addPet,
  client,
  createUser,
  createUsersWithListInput,
  deleteOrder,
  deletePet,
  deleteUser,
  findPetsByStatus,
  findPetsByTags,
  getInventory,
  getOrderById,
  getPetById,
  getUserByName,
  loginUser,
  logoutUser,
  placeOrder,
  updatePet,
  updatePetWithForm,
  updateUser,
  uploadFile,
} from '../services.gen';
import type {
  AddPetData,
  AddPetError,
  AddPetResponse,
  CreateUserData,
  CreateUserError,
  CreateUserResponse,
  CreateUsersWithListInputData,
  CreateUsersWithListInputError,
  CreateUsersWithListInputResponse,
  DeleteOrderData,
  DeletePetData,
  DeleteUserData,
  FindPetsByStatusData,
  FindPetsByTagsData,
  GetOrderByIdData,
  GetPetByIdData,
  GetUserByNameData,
  LoginUserData,
  PlaceOrderData,
  PlaceOrderError,
  PlaceOrderResponse,
  UpdatePetData,
  UpdatePetError,
  UpdatePetResponse,
  UpdatePetWithFormData,
  UpdateUserData,
  UpdateUserError,
  UpdateUserResponse,
  UploadFileData,
  UploadFileError,
  UploadFileResponse,
} from '../types.gen';

type QueryKey<TOptions extends Options> = [
  Pick<TOptions, 'baseUrl' | 'body' | 'headers' | 'path' | 'query'> & {
    _id: string;
    _infinite?: boolean;
  },
];

const createQueryKey = <TOptions extends Options>(
  id: string,
  options?: TOptions,
  infinite?: boolean,
): QueryKey<TOptions>[0] => {
  const params: QueryKey<TOptions>[0] = {
    _id: id,
    baseUrl: (options?.client ?? client).getConfig().baseUrl,
  } as QueryKey<TOptions>[0];
  if (infinite) {
    params._infinite = infinite;
  }
  if (options?.body) {
    params.body = options.body;
  }
  if (options?.headers) {
    params.headers = options.headers;
  }
  if (options?.path) {
    params.path = options.path;
  }
  if (options?.query) {
    params.query = options.query;
  }
  return params;
};

export const addPetQueryKey = (options: Options<AddPetData>) => [
  createQueryKey('addPet', options),
];

export const addPetOptions = (options: Options<AddPetData>) =>
  queryOptions({
    queryFn: async ({ queryKey, signal }) => {
      const { data } = await addPet({
        ...options,
        ...queryKey[0],
        signal,
        throwOnError: true,
      });
      return data;
    },
    queryKey: addPetQueryKey(options),
  });

export const addPetMutation = (options?: Partial<Options<AddPetData>>) => {
  const mutationOptions: MutationOptions<
    AddPetResponse,
    AddPetError,
    Options<AddPetData>
  > = {
    mutationFn: async (localOptions) => {
      const { data } = await addPet({
        ...options,
        ...localOptions,
        throwOnError: true,
      });
      return data;
    },
  };
  return mutationOptions;
};

export const updatePetMutation = (
  options?: Partial<Options<UpdatePetData>>,
) => {
  const mutationOptions: MutationOptions<
    UpdatePetResponse,
    UpdatePetError,
    Options<UpdatePetData>
  > = {
    mutationFn: async (localOptions) => {
      const { data } = await updatePet({
        ...options,
        ...localOptions,
        throwOnError: true,
      });
      return data;
    },
  };
  return mutationOptions;
};

export const findPetsByStatusQueryKey = (
  options?: Options<FindPetsByStatusData>,
) => [createQueryKey('findPetsByStatus', options)];

export const findPetsByStatusOptions = (
  options?: Options<FindPetsByStatusData>,
) =>
  queryOptions({
    queryFn: async ({ queryKey, signal }) => {
      const { data } = await findPetsByStatus({
        ...options,
        ...queryKey[0],
        signal,
        throwOnError: true,
      });
      return data;
    },
    queryKey: findPetsByStatusQueryKey(options),
  });

export const findPetsByTagsQueryKey = (
  options?: Options<FindPetsByTagsData>,
) => [createQueryKey('findPetsByTags', options)];

export const findPetsByTagsOptions = (options?: Options<FindPetsByTagsData>) =>
  queryOptions({
    queryFn: async ({ queryKey, signal }) => {
      const { data } = await findPetsByTags({
        ...options,
        ...queryKey[0],
        signal,
        throwOnError: true,
      });
      return data;
    },
    queryKey: findPetsByTagsQueryKey(options),
  });

export const getPetByIdQueryKey = (options: Options<GetPetByIdData>) => [
  createQueryKey('getPetById', options),
];

export const getPetByIdOptions = (options: Options<GetPetByIdData>) =>
  queryOptions({
    queryFn: async ({ queryKey, signal }) => {
      const { data } = await getPetById({
        ...options,
        ...queryKey[0],
        signal,
        throwOnError: true,
      });
      return data;
    },
    queryKey: getPetByIdQueryKey(options),
  });

export const updatePetWithFormQueryKey = (
  options: Options<UpdatePetWithFormData>,
) => [createQueryKey('updatePetWithForm', options)];

export const updatePetWithFormOptions = (
  options: Options<UpdatePetWithFormData>,
) =>
  queryOptions({
    queryFn: async ({ queryKey, signal }) => {
      const { data } = await updatePetWithForm({
        ...options,
        ...queryKey[0],
        signal,
        throwOnError: true,
      });
      return data;
    },
    queryKey: updatePetWithFormQueryKey(options),
  });

export const updatePetWithFormMutation = (
  options?: Partial<Options<UpdatePetWithFormData>>,
) => {
  const mutationOptions: MutationOptions<
    void,
    DefaultError,
    Options<UpdatePetWithFormData>
  > = {
    mutationFn: async (localOptions) => {
      const { data } = await updatePetWithForm({
        ...options,
        ...localOptions,
        throwOnError: true,
      });
      return data;
    },
  };
  return mutationOptions;
};

export const deletePetMutation = (
  options?: Partial<Options<DeletePetData>>,
) => {
  const mutationOptions: MutationOptions<
    void,
    DefaultError,
    Options<DeletePetData>
  > = {
    mutationFn: async (localOptions) => {
      const { data } = await deletePet({
        ...options,
        ...localOptions,
        throwOnError: true,
      });
      return data;
    },
  };
  return mutationOptions;
};

export const uploadFileQueryKey = (options: Options<UploadFileData>) => [
  createQueryKey('uploadFile', options),
];

export const uploadFileOptions = (options: Options<UploadFileData>) =>
  queryOptions({
    queryFn: async ({ queryKey, signal }) => {
      const { data } = await uploadFile({
        ...options,
        ...queryKey[0],
        signal,
        throwOnError: true,
      });
      return data;
    },
    queryKey: uploadFileQueryKey(options),
  });

export const uploadFileMutation = (
  options?: Partial<Options<UploadFileData>>,
) => {
  const mutationOptions: MutationOptions<
    UploadFileResponse,
    UploadFileError,
    Options<UploadFileData>
  > = {
    mutationFn: async (localOptions) => {
      const { data } = await uploadFile({
        ...options,
        ...localOptions,
        throwOnError: true,
      });
      return data;
    },
  };
  return mutationOptions;
};

export const getInventoryQueryKey = (options?: Options) => [
  createQueryKey('getInventory', options),
];

export const getInventoryOptions = (options?: Options) =>
  queryOptions({
    queryFn: async ({ queryKey, signal }) => {
      const { data } = await getInventory({
        ...options,
        ...queryKey[0],
        signal,
        throwOnError: true,
      });
      return data;
    },
    queryKey: getInventoryQueryKey(options),
  });

export const placeOrderQueryKey = (options?: Options<PlaceOrderData>) => [
  createQueryKey('placeOrder', options),
];

export const placeOrderOptions = (options?: Options<PlaceOrderData>) =>
  queryOptions({
    queryFn: async ({ queryKey, signal }) => {
      const { data } = await placeOrder({
        ...options,
        ...queryKey[0],
        signal,
        throwOnError: true,
      });
      return data;
    },
    queryKey: placeOrderQueryKey(options),
  });

export const placeOrderMutation = (
  options?: Partial<Options<PlaceOrderData>>,
) => {
  const mutationOptions: MutationOptions<
    PlaceOrderResponse,
    PlaceOrderError,
    Options<PlaceOrderData>
  > = {
    mutationFn: async (localOptions) => {
      const { data } = await placeOrder({
        ...options,
        ...localOptions,
        throwOnError: true,
      });
      return data;
    },
  };
  return mutationOptions;
};

export const getOrderByIdQueryKey = (options: Options<GetOrderByIdData>) => [
  createQueryKey('getOrderById', options),
];

export const getOrderByIdOptions = (options: Options<GetOrderByIdData>) =>
  queryOptions({
    queryFn: async ({ queryKey, signal }) => {
      const { data } = await getOrderById({
        ...options,
        ...queryKey[0],
        signal,
        throwOnError: true,
      });
      return data;
    },
    queryKey: getOrderByIdQueryKey(options),
  });

export const deleteOrderMutation = (
  options?: Partial<Options<DeleteOrderData>>,
) => {
  const mutationOptions: MutationOptions<
    void,
    DefaultError,
    Options<DeleteOrderData>
  > = {
    mutationFn: async (localOptions) => {
      const { data } = await deleteOrder({
        ...options,
        ...localOptions,
        throwOnError: true,
      });
      return data;
    },
  };
  return mutationOptions;
};

export const createUserQueryKey = (options?: Options<CreateUserData>) => [
  createQueryKey('createUser', options),
];

export const createUserOptions = (options?: Options<CreateUserData>) =>
  queryOptions({
    queryFn: async ({ queryKey, signal }) => {
      const { data } = await createUser({
        ...options,
        ...queryKey[0],
        signal,
        throwOnError: true,
      });
      return data;
    },
    queryKey: createUserQueryKey(options),
  });

export const createUserMutation = (
  options?: Partial<Options<CreateUserData>>,
) => {
  const mutationOptions: MutationOptions<
    CreateUserResponse,
    CreateUserError,
    Options<CreateUserData>
  > = {
    mutationFn: async (localOptions) => {
      const { data } = await createUser({
        ...options,
        ...localOptions,
        throwOnError: true,
      });
      return data;
    },
  };
  return mutationOptions;
};

export const createUsersWithListInputQueryKey = (
  options?: Options<CreateUsersWithListInputData>,
) => [createQueryKey('createUsersWithListInput', options)];

export const createUsersWithListInputOptions = (
  options?: Options<CreateUsersWithListInputData>,
) =>
  queryOptions({
    queryFn: async ({ queryKey, signal }) => {
      const { data } = await createUsersWithListInput({
        ...options,
        ...queryKey[0],
        signal,
        throwOnError: true,
      });
      return data;
    },
    queryKey: createUsersWithListInputQueryKey(options),
  });

export const createUsersWithListInputMutation = (
  options?: Partial<Options<CreateUsersWithListInputData>>,
) => {
  const mutationOptions: MutationOptions<
    CreateUsersWithListInputResponse,
    CreateUsersWithListInputError,
    Options<CreateUsersWithListInputData>
  > = {
    mutationFn: async (localOptions) => {
      const { data } = await createUsersWithListInput({
        ...options,
        ...localOptions,
        throwOnError: true,
      });
      return data;
    },
  };
  return mutationOptions;
};

export const loginUserQueryKey = (options?: Options<LoginUserData>) => [
  createQueryKey('loginUser', options),
];

export const loginUserOptions = (options?: Options<LoginUserData>) =>
  queryOptions({
    queryFn: async ({ queryKey, signal }) => {
      const { data } = await loginUser({
        ...options,
        ...queryKey[0],
        signal,
        throwOnError: true,
      });
      return data;
    },
    queryKey: loginUserQueryKey(options),
  });

export const logoutUserQueryKey = (options?: Options) => [
  createQueryKey('logoutUser', options),
];

export const logoutUserOptions = (options?: Options) =>
  queryOptions({
    queryFn: async ({ queryKey, signal }) => {
      const { data } = await logoutUser({
        ...options,
        ...queryKey[0],
        signal,
        throwOnError: true,
      });
      return data;
    },
    queryKey: logoutUserQueryKey(options),
  });

export const getUserByNameQueryKey = (options: Options<GetUserByNameData>) => [
  createQueryKey('getUserByName', options),
];

export const getUserByNameOptions = (options: Options<GetUserByNameData>) =>
  queryOptions({
    queryFn: async ({ queryKey, signal }) => {
      const { data } = await getUserByName({
        ...options,
        ...queryKey[0],
        signal,
        throwOnError: true,
      });
      return data;
    },
    queryKey: getUserByNameQueryKey(options),
  });

export const updateUserMutation = (
  options?: Partial<Options<UpdateUserData>>,
) => {
  const mutationOptions: MutationOptions<
    UpdateUserResponse,
    UpdateUserError,
    Options<UpdateUserData>
  > = {
    mutationFn: async (localOptions) => {
      const { data } = await updateUser({
        ...options,
        ...localOptions,
        throwOnError: true,
      });
      return data;
    },
  };
  return mutationOptions;
};

export const deleteUserMutation = (
  options?: Partial<Options<DeleteUserData>>,
) => {
  const mutationOptions: MutationOptions<
    void,
    DefaultError,
    Options<DeleteUserData>
  > = {
    mutationFn: async (localOptions) => {
      const { data } = await deleteUser({
        ...options,
        ...localOptions,
        throwOnError: true,
      });
      return data;
    },
  };
  return mutationOptions;
};
