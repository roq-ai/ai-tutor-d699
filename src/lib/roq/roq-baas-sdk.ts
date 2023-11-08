/* eslint-disable */
import { type CheckSelect, fetcher, marshal, makeUrl } from '@roq/client';
import type { Prisma, content, module, progress, quiz, startup, user } from './types';
import { DefaultArgs, GetFindResult } from './types/runtime/library';

export type RequestOptions = Record<string, any>;

interface ContentSDK {
  create: <T extends Prisma.contentCreateArgs, R extends CheckSelect<T, content, Prisma.contentGetPayload<T>>>(
    data: Prisma.SelectSubset<T, Prisma.contentCreateArgs>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  createMany: <T extends Prisma.contentCreateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.contentCreateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  update: <T extends Prisma.contentUpdateArgs, R extends Prisma.contentGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.contentUpdateArgs>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  updateMany: <T extends Prisma.contentUpdateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.contentUpdateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  upsert: <T extends Prisma.contentUpsertArgs, R extends Prisma.contentGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.contentUpsertArgs>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  delete: <T extends Prisma.contentDeleteArgs, R extends Prisma.contentGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.contentDeleteArgs>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  deleteMany: <T extends Prisma.contentDeleteManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.contentDeleteManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findMany: <T extends Prisma.contentFindManyArgs, R extends GetFindResult<Prisma.$contentPayload<DefaultArgs>, T>[]>(
    args?: Prisma.SelectSubset<T, Prisma.contentFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  count: <T extends Prisma.contentCountArgs, R extends number>(
    args?: Prisma.SelectSubset<T, Prisma.contentCountArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findManyWithCount: <
    T extends Prisma.contentFindManyArgs,
    R extends GetFindResult<Prisma.$contentPayload<DefaultArgs>, T>[],
    C extends number,
  >(
    args?: Prisma.SelectSubset<T, Prisma.contentFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<{ data: R; count: C }>;

  findFirst: <T extends Prisma.contentFindFirstArgs, R extends GetFindResult<Prisma.$contentPayload<DefaultArgs>, T>>(
    args?: Prisma.SelectSubset<T, Prisma.contentFindFirstArgs>,
    options?: RequestOptions,
  ) => Promise<R>;
}

interface ModuleSDK {
  create: <T extends Prisma.moduleCreateArgs, R extends CheckSelect<T, module, Prisma.moduleGetPayload<T>>>(
    data: Prisma.SelectSubset<T, Prisma.moduleCreateArgs>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  createMany: <T extends Prisma.moduleCreateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.moduleCreateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  update: <T extends Prisma.moduleUpdateArgs, R extends Prisma.moduleGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.moduleUpdateArgs>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  updateMany: <T extends Prisma.moduleUpdateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.moduleUpdateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  upsert: <T extends Prisma.moduleUpsertArgs, R extends Prisma.moduleGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.moduleUpsertArgs>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  delete: <T extends Prisma.moduleDeleteArgs, R extends Prisma.moduleGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.moduleDeleteArgs>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  deleteMany: <T extends Prisma.moduleDeleteManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.moduleDeleteManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findMany: <T extends Prisma.moduleFindManyArgs, R extends GetFindResult<Prisma.$modulePayload<DefaultArgs>, T>[]>(
    args?: Prisma.SelectSubset<T, Prisma.moduleFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  count: <T extends Prisma.moduleCountArgs, R extends number>(
    args?: Prisma.SelectSubset<T, Prisma.moduleCountArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findManyWithCount: <
    T extends Prisma.moduleFindManyArgs,
    R extends GetFindResult<Prisma.$modulePayload<DefaultArgs>, T>[],
    C extends number,
  >(
    args?: Prisma.SelectSubset<T, Prisma.moduleFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<{ data: R; count: C }>;

  findFirst: <T extends Prisma.moduleFindFirstArgs, R extends GetFindResult<Prisma.$modulePayload<DefaultArgs>, T>>(
    args?: Prisma.SelectSubset<T, Prisma.moduleFindFirstArgs>,
    options?: RequestOptions,
  ) => Promise<R>;
}

interface ProgressSDK {
  create: <T extends Prisma.progressCreateArgs, R extends CheckSelect<T, progress, Prisma.progressGetPayload<T>>>(
    data: Prisma.SelectSubset<T, Prisma.progressCreateArgs>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  createMany: <T extends Prisma.progressCreateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.progressCreateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  update: <T extends Prisma.progressUpdateArgs, R extends Prisma.progressGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.progressUpdateArgs>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  updateMany: <T extends Prisma.progressUpdateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.progressUpdateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  upsert: <T extends Prisma.progressUpsertArgs, R extends Prisma.progressGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.progressUpsertArgs>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  delete: <T extends Prisma.progressDeleteArgs, R extends Prisma.progressGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.progressDeleteArgs>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  deleteMany: <T extends Prisma.progressDeleteManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.progressDeleteManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findMany: <T extends Prisma.progressFindManyArgs, R extends GetFindResult<Prisma.$progressPayload<DefaultArgs>, T>[]>(
    args?: Prisma.SelectSubset<T, Prisma.progressFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  count: <T extends Prisma.progressCountArgs, R extends number>(
    args?: Prisma.SelectSubset<T, Prisma.progressCountArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findManyWithCount: <
    T extends Prisma.progressFindManyArgs,
    R extends GetFindResult<Prisma.$progressPayload<DefaultArgs>, T>[],
    C extends number,
  >(
    args?: Prisma.SelectSubset<T, Prisma.progressFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<{ data: R; count: C }>;

  findFirst: <T extends Prisma.progressFindFirstArgs, R extends GetFindResult<Prisma.$progressPayload<DefaultArgs>, T>>(
    args?: Prisma.SelectSubset<T, Prisma.progressFindFirstArgs>,
    options?: RequestOptions,
  ) => Promise<R>;
}

interface QuizSDK {
  create: <T extends Prisma.quizCreateArgs, R extends CheckSelect<T, quiz, Prisma.quizGetPayload<T>>>(
    data: Prisma.SelectSubset<T, Prisma.quizCreateArgs>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  createMany: <T extends Prisma.quizCreateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.quizCreateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  update: <T extends Prisma.quizUpdateArgs, R extends Prisma.quizGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.quizUpdateArgs>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  updateMany: <T extends Prisma.quizUpdateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.quizUpdateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  upsert: <T extends Prisma.quizUpsertArgs, R extends Prisma.quizGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.quizUpsertArgs>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  delete: <T extends Prisma.quizDeleteArgs, R extends Prisma.quizGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.quizDeleteArgs>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  deleteMany: <T extends Prisma.quizDeleteManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.quizDeleteManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findMany: <T extends Prisma.quizFindManyArgs, R extends GetFindResult<Prisma.$quizPayload<DefaultArgs>, T>[]>(
    args?: Prisma.SelectSubset<T, Prisma.quizFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  count: <T extends Prisma.quizCountArgs, R extends number>(
    args?: Prisma.SelectSubset<T, Prisma.quizCountArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findManyWithCount: <
    T extends Prisma.quizFindManyArgs,
    R extends GetFindResult<Prisma.$quizPayload<DefaultArgs>, T>[],
    C extends number,
  >(
    args?: Prisma.SelectSubset<T, Prisma.quizFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<{ data: R; count: C }>;

  findFirst: <T extends Prisma.quizFindFirstArgs, R extends GetFindResult<Prisma.$quizPayload<DefaultArgs>, T>>(
    args?: Prisma.SelectSubset<T, Prisma.quizFindFirstArgs>,
    options?: RequestOptions,
  ) => Promise<R>;
}

interface StartupSDK {
  create: <T extends Prisma.startupCreateArgs, R extends CheckSelect<T, startup, Prisma.startupGetPayload<T>>>(
    data: Prisma.SelectSubset<T, Prisma.startupCreateArgs>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  createMany: <T extends Prisma.startupCreateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.startupCreateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  update: <T extends Prisma.startupUpdateArgs, R extends Prisma.startupGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.startupUpdateArgs>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  updateMany: <T extends Prisma.startupUpdateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.startupUpdateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  upsert: <T extends Prisma.startupUpsertArgs, R extends Prisma.startupGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.startupUpsertArgs>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  delete: <T extends Prisma.startupDeleteArgs, R extends Prisma.startupGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.startupDeleteArgs>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  deleteMany: <T extends Prisma.startupDeleteManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.startupDeleteManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findMany: <T extends Prisma.startupFindManyArgs, R extends GetFindResult<Prisma.$startupPayload<DefaultArgs>, T>[]>(
    args?: Prisma.SelectSubset<T, Prisma.startupFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  count: <T extends Prisma.startupCountArgs, R extends number>(
    args?: Prisma.SelectSubset<T, Prisma.startupCountArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findManyWithCount: <
    T extends Prisma.startupFindManyArgs,
    R extends GetFindResult<Prisma.$startupPayload<DefaultArgs>, T>[],
    C extends number,
  >(
    args?: Prisma.SelectSubset<T, Prisma.startupFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<{ data: R; count: C }>;

  findFirst: <T extends Prisma.startupFindFirstArgs, R extends GetFindResult<Prisma.$startupPayload<DefaultArgs>, T>>(
    args?: Prisma.SelectSubset<T, Prisma.startupFindFirstArgs>,
    options?: RequestOptions,
  ) => Promise<R>;
}

interface UserSDK {
  create: <T extends Prisma.userCreateArgs, R extends CheckSelect<T, user, Prisma.userGetPayload<T>>>(
    data: Prisma.SelectSubset<T, Prisma.userCreateArgs>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  createMany: <T extends Prisma.userCreateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.userCreateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  update: <T extends Prisma.userUpdateArgs, R extends Prisma.userGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.userUpdateArgs>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  updateMany: <T extends Prisma.userUpdateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.userUpdateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  upsert: <T extends Prisma.userUpsertArgs, R extends Prisma.userGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.userUpsertArgs>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  delete: <T extends Prisma.userDeleteArgs, R extends Prisma.userGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.userDeleteArgs>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  deleteMany: <T extends Prisma.userDeleteManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.userDeleteManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findMany: <T extends Prisma.userFindManyArgs, R extends GetFindResult<Prisma.$userPayload<DefaultArgs>, T>[]>(
    args?: Prisma.SelectSubset<T, Prisma.userFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  count: <T extends Prisma.userCountArgs, R extends number>(
    args?: Prisma.SelectSubset<T, Prisma.userCountArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findManyWithCount: <
    T extends Prisma.userFindManyArgs,
    R extends GetFindResult<Prisma.$userPayload<DefaultArgs>, T>[],
    C extends number,
  >(
    args?: Prisma.SelectSubset<T, Prisma.userFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<{ data: R; count: C }>;

  findFirst: <T extends Prisma.userFindFirstArgs, R extends GetFindResult<Prisma.$userPayload<DefaultArgs>, T>>(
    args?: Prisma.SelectSubset<T, Prisma.userFindFirstArgs>,
    options?: RequestOptions,
  ) => Promise<R>;
}

export class RoqBaasSdk {
  private endpoint: string;
  private baseOptions: RequestOptions;

  public content!: ContentSDK;

  public module!: ModuleSDK;

  public progress!: ProgressSDK;

  public quiz!: QuizSDK;

  public startup!: StartupSDK;

  public user!: UserSDK;

  constructor(backendHost: string, baseOptions: RequestOptions = {}) {
    this.endpoint = backendHost;
    this.baseOptions = baseOptions;
    this.initSDK();
  }

  private initSDK() {
    const ctx = this;

    this.content = {
      create: async function createContent<
        T extends Prisma.contentCreateArgs,
        R extends CheckSelect<T, content, Prisma.contentGetPayload<T>>,
      >(data: Prisma.SelectSubset<T, Prisma.contentCreateArgs>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/content/create`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      createMany: async function createManyContent<
        T extends Prisma.contentCreateManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.contentCreateManyArgs>, options?: RequestOptions) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/content/createMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      update: async function updateContent<T extends Prisma.contentUpdateArgs, R extends Prisma.contentGetPayload<T>>(
        data: Prisma.SelectSubset<T, Prisma.contentUpdateArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/content/update`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      updateMany: async function updateManyContent<
        T extends Prisma.contentUpdateManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.contentUpdateManyArgs>, options?: RequestOptions) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/content/updateMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      upsert: async function upsertContent<T extends Prisma.contentUpsertArgs, R extends Prisma.contentGetPayload<T>>(
        data: Prisma.SelectSubset<T, Prisma.contentUpsertArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/content/upsert`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      delete: async function deleteContent<T extends Prisma.contentDeleteArgs, R extends Prisma.contentGetPayload<T>>(
        data: Prisma.SelectSubset<T, Prisma.contentDeleteArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/content/delete`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, true>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          true,
        );
        return response;
      },
      deleteMany: async function deleteManyContent<
        T extends Prisma.contentDeleteManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.contentDeleteManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/content/deleteMany`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, false>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findMany: async function findManyContent<
        T extends Prisma.contentFindManyArgs,
        R extends GetFindResult<Prisma.$contentPayload<DefaultArgs>, T>[],
      >(args?: Prisma.SelectSubset<T, Prisma.contentFindManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/content/findMany`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      count: async function countContent<T extends Prisma.contentCountArgs, R extends number>(
        args?: Prisma.SelectSubset<T, Prisma.contentCountArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/content/count`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findManyWithCount: async function findManyWithCountContent<
        T extends Prisma.contentFindManyArgs,
        R extends GetFindResult<Prisma.$contentPayload<DefaultArgs>, T>[],
        C extends number,
      >(args?: Prisma.SelectSubset<T, Prisma.contentFindManyArgs>, options?: RequestOptions) {
        const { distinct, orderBy, where } = args || {};
        const [data, count] = await Promise.all([
          ctx.content.findMany(args, options),
          ctx.content.count(
            {
              orderBy,
              where,
            },
            options,
          ),
        ]);
        return { data, count } as { data: R; count: C };
      },
      findFirst: async function findFirstContent<
        T extends Prisma.contentFindFirstArgs,
        R extends GetFindResult<Prisma.$contentPayload<DefaultArgs>, T>,
      >(args?: Prisma.SelectSubset<T, Prisma.contentFindFirstArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/content/findFirst`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
    };

    this.module = {
      create: async function createModule<
        T extends Prisma.moduleCreateArgs,
        R extends CheckSelect<T, module, Prisma.moduleGetPayload<T>>,
      >(data: Prisma.SelectSubset<T, Prisma.moduleCreateArgs>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/module/create`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      createMany: async function createManyModule<T extends Prisma.moduleCreateManyArgs, R extends Prisma.BatchPayload>(
        data: Prisma.SelectSubset<T, Prisma.moduleCreateManyArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/module/createMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      update: async function updateModule<T extends Prisma.moduleUpdateArgs, R extends Prisma.moduleGetPayload<T>>(
        data: Prisma.SelectSubset<T, Prisma.moduleUpdateArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/module/update`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      updateMany: async function updateManyModule<T extends Prisma.moduleUpdateManyArgs, R extends Prisma.BatchPayload>(
        data: Prisma.SelectSubset<T, Prisma.moduleUpdateManyArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/module/updateMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      upsert: async function upsertModule<T extends Prisma.moduleUpsertArgs, R extends Prisma.moduleGetPayload<T>>(
        data: Prisma.SelectSubset<T, Prisma.moduleUpsertArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/module/upsert`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      delete: async function deleteModule<T extends Prisma.moduleDeleteArgs, R extends Prisma.moduleGetPayload<T>>(
        data: Prisma.SelectSubset<T, Prisma.moduleDeleteArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/module/delete`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, true>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          true,
        );
        return response;
      },
      deleteMany: async function deleteManyModule<T extends Prisma.moduleDeleteManyArgs, R extends Prisma.BatchPayload>(
        data: Prisma.SelectSubset<T, Prisma.moduleDeleteManyArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/module/deleteMany`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, false>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findMany: async function findManyModule<
        T extends Prisma.moduleFindManyArgs,
        R extends GetFindResult<Prisma.$modulePayload<DefaultArgs>, T>[],
      >(args?: Prisma.SelectSubset<T, Prisma.moduleFindManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/module/findMany`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      count: async function countModule<T extends Prisma.moduleCountArgs, R extends number>(
        args?: Prisma.SelectSubset<T, Prisma.moduleCountArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/module/count`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findManyWithCount: async function findManyWithCountModule<
        T extends Prisma.moduleFindManyArgs,
        R extends GetFindResult<Prisma.$modulePayload<DefaultArgs>, T>[],
        C extends number,
      >(args?: Prisma.SelectSubset<T, Prisma.moduleFindManyArgs>, options?: RequestOptions) {
        const { distinct, orderBy, where } = args || {};
        const [data, count] = await Promise.all([
          ctx.module.findMany(args, options),
          ctx.module.count(
            {
              orderBy,
              where,
            },
            options,
          ),
        ]);
        return { data, count } as { data: R; count: C };
      },
      findFirst: async function findFirstModule<
        T extends Prisma.moduleFindFirstArgs,
        R extends GetFindResult<Prisma.$modulePayload<DefaultArgs>, T>,
      >(args?: Prisma.SelectSubset<T, Prisma.moduleFindFirstArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/module/findFirst`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
    };

    this.progress = {
      create: async function createProgress<
        T extends Prisma.progressCreateArgs,
        R extends CheckSelect<T, progress, Prisma.progressGetPayload<T>>,
      >(data: Prisma.SelectSubset<T, Prisma.progressCreateArgs>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/progress/create`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      createMany: async function createManyProgress<
        T extends Prisma.progressCreateManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.progressCreateManyArgs>, options?: RequestOptions) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/progress/createMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      update: async function updateProgress<
        T extends Prisma.progressUpdateArgs,
        R extends Prisma.progressGetPayload<T>,
      >(data: Prisma.SelectSubset<T, Prisma.progressUpdateArgs>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/progress/update`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      updateMany: async function updateManyProgress<
        T extends Prisma.progressUpdateManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.progressUpdateManyArgs>, options?: RequestOptions) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/progress/updateMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      upsert: async function upsertProgress<
        T extends Prisma.progressUpsertArgs,
        R extends Prisma.progressGetPayload<T>,
      >(data: Prisma.SelectSubset<T, Prisma.progressUpsertArgs>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/progress/upsert`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      delete: async function deleteProgress<
        T extends Prisma.progressDeleteArgs,
        R extends Prisma.progressGetPayload<T>,
      >(data: Prisma.SelectSubset<T, Prisma.progressDeleteArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/progress/delete`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, true>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          true,
        );
        return response;
      },
      deleteMany: async function deleteManyProgress<
        T extends Prisma.progressDeleteManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.progressDeleteManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/progress/deleteMany`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, false>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findMany: async function findManyProgress<
        T extends Prisma.progressFindManyArgs,
        R extends GetFindResult<Prisma.$progressPayload<DefaultArgs>, T>[],
      >(args?: Prisma.SelectSubset<T, Prisma.progressFindManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/progress/findMany`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      count: async function countProgress<T extends Prisma.progressCountArgs, R extends number>(
        args?: Prisma.SelectSubset<T, Prisma.progressCountArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/progress/count`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findManyWithCount: async function findManyWithCountProgress<
        T extends Prisma.progressFindManyArgs,
        R extends GetFindResult<Prisma.$progressPayload<DefaultArgs>, T>[],
        C extends number,
      >(args?: Prisma.SelectSubset<T, Prisma.progressFindManyArgs>, options?: RequestOptions) {
        const { distinct, orderBy, where } = args || {};
        const [data, count] = await Promise.all([
          ctx.progress.findMany(args, options),
          ctx.progress.count(
            {
              orderBy,
              where,
            },
            options,
          ),
        ]);
        return { data, count } as { data: R; count: C };
      },
      findFirst: async function findFirstProgress<
        T extends Prisma.progressFindFirstArgs,
        R extends GetFindResult<Prisma.$progressPayload<DefaultArgs>, T>,
      >(args?: Prisma.SelectSubset<T, Prisma.progressFindFirstArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/progress/findFirst`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
    };

    this.quiz = {
      create: async function createQuiz<
        T extends Prisma.quizCreateArgs,
        R extends CheckSelect<T, quiz, Prisma.quizGetPayload<T>>,
      >(data: Prisma.SelectSubset<T, Prisma.quizCreateArgs>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/quiz/create`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      createMany: async function createManyQuiz<T extends Prisma.quizCreateManyArgs, R extends Prisma.BatchPayload>(
        data: Prisma.SelectSubset<T, Prisma.quizCreateManyArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/quiz/createMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      update: async function updateQuiz<T extends Prisma.quizUpdateArgs, R extends Prisma.quizGetPayload<T>>(
        data: Prisma.SelectSubset<T, Prisma.quizUpdateArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/quiz/update`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      updateMany: async function updateManyQuiz<T extends Prisma.quizUpdateManyArgs, R extends Prisma.BatchPayload>(
        data: Prisma.SelectSubset<T, Prisma.quizUpdateManyArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/quiz/updateMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      upsert: async function upsertQuiz<T extends Prisma.quizUpsertArgs, R extends Prisma.quizGetPayload<T>>(
        data: Prisma.SelectSubset<T, Prisma.quizUpsertArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/quiz/upsert`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      delete: async function deleteQuiz<T extends Prisma.quizDeleteArgs, R extends Prisma.quizGetPayload<T>>(
        data: Prisma.SelectSubset<T, Prisma.quizDeleteArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/quiz/delete`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, true>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          true,
        );
        return response;
      },
      deleteMany: async function deleteManyQuiz<T extends Prisma.quizDeleteManyArgs, R extends Prisma.BatchPayload>(
        data: Prisma.SelectSubset<T, Prisma.quizDeleteManyArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/quiz/deleteMany`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, false>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findMany: async function findManyQuiz<
        T extends Prisma.quizFindManyArgs,
        R extends GetFindResult<Prisma.$quizPayload<DefaultArgs>, T>[],
      >(args?: Prisma.SelectSubset<T, Prisma.quizFindManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/quiz/findMany`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      count: async function countQuiz<T extends Prisma.quizCountArgs, R extends number>(
        args?: Prisma.SelectSubset<T, Prisma.quizCountArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/quiz/count`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findManyWithCount: async function findManyWithCountQuiz<
        T extends Prisma.quizFindManyArgs,
        R extends GetFindResult<Prisma.$quizPayload<DefaultArgs>, T>[],
        C extends number,
      >(args?: Prisma.SelectSubset<T, Prisma.quizFindManyArgs>, options?: RequestOptions) {
        const { distinct, orderBy, where } = args || {};
        const [data, count] = await Promise.all([
          ctx.quiz.findMany(args, options),
          ctx.quiz.count(
            {
              orderBy,
              where,
            },
            options,
          ),
        ]);
        return { data, count } as { data: R; count: C };
      },
      findFirst: async function findFirstQuiz<
        T extends Prisma.quizFindFirstArgs,
        R extends GetFindResult<Prisma.$quizPayload<DefaultArgs>, T>,
      >(args?: Prisma.SelectSubset<T, Prisma.quizFindFirstArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/quiz/findFirst`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
    };

    this.startup = {
      create: async function createStartup<
        T extends Prisma.startupCreateArgs,
        R extends CheckSelect<T, startup, Prisma.startupGetPayload<T>>,
      >(data: Prisma.SelectSubset<T, Prisma.startupCreateArgs>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/startup/create`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      createMany: async function createManyStartup<
        T extends Prisma.startupCreateManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.startupCreateManyArgs>, options?: RequestOptions) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/startup/createMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      update: async function updateStartup<T extends Prisma.startupUpdateArgs, R extends Prisma.startupGetPayload<T>>(
        data: Prisma.SelectSubset<T, Prisma.startupUpdateArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/startup/update`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      updateMany: async function updateManyStartup<
        T extends Prisma.startupUpdateManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.startupUpdateManyArgs>, options?: RequestOptions) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/startup/updateMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      upsert: async function upsertStartup<T extends Prisma.startupUpsertArgs, R extends Prisma.startupGetPayload<T>>(
        data: Prisma.SelectSubset<T, Prisma.startupUpsertArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/startup/upsert`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      delete: async function deleteStartup<T extends Prisma.startupDeleteArgs, R extends Prisma.startupGetPayload<T>>(
        data: Prisma.SelectSubset<T, Prisma.startupDeleteArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/startup/delete`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, true>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          true,
        );
        return response;
      },
      deleteMany: async function deleteManyStartup<
        T extends Prisma.startupDeleteManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.startupDeleteManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/startup/deleteMany`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, false>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findMany: async function findManyStartup<
        T extends Prisma.startupFindManyArgs,
        R extends GetFindResult<Prisma.$startupPayload<DefaultArgs>, T>[],
      >(args?: Prisma.SelectSubset<T, Prisma.startupFindManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/startup/findMany`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      count: async function countStartup<T extends Prisma.startupCountArgs, R extends number>(
        args?: Prisma.SelectSubset<T, Prisma.startupCountArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/startup/count`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findManyWithCount: async function findManyWithCountStartup<
        T extends Prisma.startupFindManyArgs,
        R extends GetFindResult<Prisma.$startupPayload<DefaultArgs>, T>[],
        C extends number,
      >(args?: Prisma.SelectSubset<T, Prisma.startupFindManyArgs>, options?: RequestOptions) {
        const { distinct, orderBy, where } = args || {};
        const [data, count] = await Promise.all([
          ctx.startup.findMany(args, options),
          ctx.startup.count(
            {
              orderBy,
              where,
            },
            options,
          ),
        ]);
        return { data, count } as { data: R; count: C };
      },
      findFirst: async function findFirstStartup<
        T extends Prisma.startupFindFirstArgs,
        R extends GetFindResult<Prisma.$startupPayload<DefaultArgs>, T>,
      >(args?: Prisma.SelectSubset<T, Prisma.startupFindFirstArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/startup/findFirst`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
    };

    this.user = {
      create: async function createUser<
        T extends Prisma.userCreateArgs,
        R extends CheckSelect<T, user, Prisma.userGetPayload<T>>,
      >(data: Prisma.SelectSubset<T, Prisma.userCreateArgs>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/user/create`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      createMany: async function createManyUser<T extends Prisma.userCreateManyArgs, R extends Prisma.BatchPayload>(
        data: Prisma.SelectSubset<T, Prisma.userCreateManyArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/user/createMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      update: async function updateUser<T extends Prisma.userUpdateArgs, R extends Prisma.userGetPayload<T>>(
        data: Prisma.SelectSubset<T, Prisma.userUpdateArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/user/update`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      updateMany: async function updateManyUser<T extends Prisma.userUpdateManyArgs, R extends Prisma.BatchPayload>(
        data: Prisma.SelectSubset<T, Prisma.userUpdateManyArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/user/updateMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      upsert: async function upsertUser<T extends Prisma.userUpsertArgs, R extends Prisma.userGetPayload<T>>(
        data: Prisma.SelectSubset<T, Prisma.userUpsertArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/user/upsert`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      delete: async function deleteUser<T extends Prisma.userDeleteArgs, R extends Prisma.userGetPayload<T>>(
        data: Prisma.SelectSubset<T, Prisma.userDeleteArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/user/delete`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, true>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          true,
        );
        return response;
      },
      deleteMany: async function deleteManyUser<T extends Prisma.userDeleteManyArgs, R extends Prisma.BatchPayload>(
        data: Prisma.SelectSubset<T, Prisma.userDeleteManyArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/user/deleteMany`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, false>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findMany: async function findManyUser<
        T extends Prisma.userFindManyArgs,
        R extends GetFindResult<Prisma.$userPayload<DefaultArgs>, T>[],
      >(args?: Prisma.SelectSubset<T, Prisma.userFindManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/user/findMany`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      count: async function countUser<T extends Prisma.userCountArgs, R extends number>(
        args?: Prisma.SelectSubset<T, Prisma.userCountArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/user/count`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findManyWithCount: async function findManyWithCountUser<
        T extends Prisma.userFindManyArgs,
        R extends GetFindResult<Prisma.$userPayload<DefaultArgs>, T>[],
        C extends number,
      >(args?: Prisma.SelectSubset<T, Prisma.userFindManyArgs>, options?: RequestOptions) {
        const { distinct, orderBy, where } = args || {};
        const [data, count] = await Promise.all([
          ctx.user.findMany(args, options),
          ctx.user.count(
            {
              orderBy,
              where,
            },
            options,
          ),
        ]);
        return { data, count } as { data: R; count: C };
      },
      findFirst: async function findFirstUser<
        T extends Prisma.userFindFirstArgs,
        R extends GetFindResult<Prisma.$userPayload<DefaultArgs>, T>,
      >(args?: Prisma.SelectSubset<T, Prisma.userFindFirstArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/user/findFirst`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
    };
  }
}
