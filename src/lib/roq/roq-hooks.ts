/* eslint-disable */
import useSWR from 'swr';
import type { Prisma } from './types';
import { DefaultArgs, GetFindResult } from './types/runtime/library';
import { useRoqClient } from './roq-client-provider';
import { SWRRequestOptions } from './roq-client';
import { RequestOptions } from './roq-baas-sdk';
import {
  FileCategoriesQuery,
  FileCategoriesQueryVariables,
  FileCategoryContentGroupQuery,
  FileCategoryContentGroupQueryVariables,
  FileCategoryContentGroupsQuery,
  FileCategoryContentGroupsQueryVariables,
  FileCategoryContentTypesQuery,
  FileCategoryContentTypesQueryVariables,
  FileCategoryQuery,
  FileCategoryQueryVariables,
  FileQuery,
  FileQueryVariables,
  FilesQuery,
  FilesQueryVariables,
  RoleQuery,
  RoleQueryVariables,
  RolesQuery,
  RolesQueryVariables,
  TenantQuery,
  TenantQueryVariables,
  UserInviteQuery,
  UserInviteQueryVariables,
  UserInvitesQuery,
  UserInvitesQueryVariables,
  UserProfileQuery,
  UserProfileQueryVariables,
  UserProfilesQuery,
  UserProfilesQueryVariables,
} from '@roq/client';

export function useContentFindMany<
  T extends Prisma.contentFindManyArgs,
  R extends GetFindResult<Prisma.$contentPayload<DefaultArgs>, T>[],
>(
  args?: Prisma.SelectSubset<T, Prisma.contentFindManyArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useContentFindMany', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.content.findMany(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useContentCount<T extends Prisma.contentCountArgs, R extends number>(
  args?: Prisma.SelectSubset<T, Prisma.contentCountArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useContentCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.content.count(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useContentFindManyWithCount<
  T extends Prisma.contentFindManyArgs,
  R extends { data: GetFindResult<Prisma.$contentPayload<DefaultArgs>, T>[]; count: number },
>(
  args?: Prisma.SelectSubset<T, Prisma.contentFindManyArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useContentFindManyWithCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.content.findManyWithCount(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useContentFindFirst<
  T extends Prisma.contentFindFirstArgs,
  R extends GetFindResult<Prisma.$contentPayload<DefaultArgs>, T>,
>(
  args?: Prisma.SelectSubset<T, Prisma.contentFindFirstArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useContentFindFirst', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.content.findFirst(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useModuleFindMany<
  T extends Prisma.moduleFindManyArgs,
  R extends GetFindResult<Prisma.$modulePayload<DefaultArgs>, T>[],
>(
  args?: Prisma.SelectSubset<T, Prisma.moduleFindManyArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useModuleFindMany', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.module.findMany(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useModuleCount<T extends Prisma.moduleCountArgs, R extends number>(
  args?: Prisma.SelectSubset<T, Prisma.moduleCountArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useModuleCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.module.count(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useModuleFindManyWithCount<
  T extends Prisma.moduleFindManyArgs,
  R extends { data: GetFindResult<Prisma.$modulePayload<DefaultArgs>, T>[]; count: number },
>(
  args?: Prisma.SelectSubset<T, Prisma.moduleFindManyArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useModuleFindManyWithCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.module.findManyWithCount(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useModuleFindFirst<
  T extends Prisma.moduleFindFirstArgs,
  R extends GetFindResult<Prisma.$modulePayload<DefaultArgs>, T>,
>(
  args?: Prisma.SelectSubset<T, Prisma.moduleFindFirstArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useModuleFindFirst', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.module.findFirst(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useProgressFindMany<
  T extends Prisma.progressFindManyArgs,
  R extends GetFindResult<Prisma.$progressPayload<DefaultArgs>, T>[],
>(
  args?: Prisma.SelectSubset<T, Prisma.progressFindManyArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useProgressFindMany', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.progress.findMany(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useProgressCount<T extends Prisma.progressCountArgs, R extends number>(
  args?: Prisma.SelectSubset<T, Prisma.progressCountArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useProgressCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.progress.count(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useProgressFindManyWithCount<
  T extends Prisma.progressFindManyArgs,
  R extends { data: GetFindResult<Prisma.$progressPayload<DefaultArgs>, T>[]; count: number },
>(
  args?: Prisma.SelectSubset<T, Prisma.progressFindManyArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useProgressFindManyWithCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.progress.findManyWithCount(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useProgressFindFirst<
  T extends Prisma.progressFindFirstArgs,
  R extends GetFindResult<Prisma.$progressPayload<DefaultArgs>, T>,
>(
  args?: Prisma.SelectSubset<T, Prisma.progressFindFirstArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useProgressFindFirst', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.progress.findFirst(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useQuizFindMany<
  T extends Prisma.quizFindManyArgs,
  R extends GetFindResult<Prisma.$quizPayload<DefaultArgs>, T>[],
>(args?: Prisma.SelectSubset<T, Prisma.quizFindManyArgs>, options?: RequestOptions, swrOptions?: SWRRequestOptions<R>) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useQuizFindMany', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.quiz.findMany(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useQuizCount<T extends Prisma.quizCountArgs, R extends number>(
  args?: Prisma.SelectSubset<T, Prisma.quizCountArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useQuizCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.quiz.count(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useQuizFindManyWithCount<
  T extends Prisma.quizFindManyArgs,
  R extends { data: GetFindResult<Prisma.$quizPayload<DefaultArgs>, T>[]; count: number },
>(args?: Prisma.SelectSubset<T, Prisma.quizFindManyArgs>, options?: RequestOptions, swrOptions?: SWRRequestOptions<R>) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useQuizFindManyWithCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.quiz.findManyWithCount(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useQuizFindFirst<
  T extends Prisma.quizFindFirstArgs,
  R extends GetFindResult<Prisma.$quizPayload<DefaultArgs>, T>,
>(
  args?: Prisma.SelectSubset<T, Prisma.quizFindFirstArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useQuizFindFirst', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.quiz.findFirst(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useStartupFindMany<
  T extends Prisma.startupFindManyArgs,
  R extends GetFindResult<Prisma.$startupPayload<DefaultArgs>, T>[],
>(
  args?: Prisma.SelectSubset<T, Prisma.startupFindManyArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useStartupFindMany', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.startup.findMany(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useStartupCount<T extends Prisma.startupCountArgs, R extends number>(
  args?: Prisma.SelectSubset<T, Prisma.startupCountArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useStartupCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.startup.count(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useStartupFindManyWithCount<
  T extends Prisma.startupFindManyArgs,
  R extends { data: GetFindResult<Prisma.$startupPayload<DefaultArgs>, T>[]; count: number },
>(
  args?: Prisma.SelectSubset<T, Prisma.startupFindManyArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useStartupFindManyWithCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.startup.findManyWithCount(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useStartupFindFirst<
  T extends Prisma.startupFindFirstArgs,
  R extends GetFindResult<Prisma.$startupPayload<DefaultArgs>, T>,
>(
  args?: Prisma.SelectSubset<T, Prisma.startupFindFirstArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useStartupFindFirst', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.startup.findFirst(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useUserFindMany<
  T extends Prisma.userFindManyArgs,
  R extends GetFindResult<Prisma.$userPayload<DefaultArgs>, T>[],
>(args?: Prisma.SelectSubset<T, Prisma.userFindManyArgs>, options?: RequestOptions, swrOptions?: SWRRequestOptions<R>) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useUserFindMany', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.user.findMany(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useUserCount<T extends Prisma.userCountArgs, R extends number>(
  args?: Prisma.SelectSubset<T, Prisma.userCountArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useUserCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.user.count(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useUserFindManyWithCount<
  T extends Prisma.userFindManyArgs,
  R extends { data: GetFindResult<Prisma.$userPayload<DefaultArgs>, T>[]; count: number },
>(args?: Prisma.SelectSubset<T, Prisma.userFindManyArgs>, options?: RequestOptions, swrOptions?: SWRRequestOptions<R>) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useUserFindManyWithCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.user.findManyWithCount(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useUserFindFirst<
  T extends Prisma.userFindFirstArgs,
  R extends GetFindResult<Prisma.$userPayload<DefaultArgs>, T>,
>(
  args?: Prisma.SelectSubset<T, Prisma.userFindFirstArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useUserFindFirst', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.user.findFirst(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useRoqPlatformUserProfiles(
  args?: UserProfilesQueryVariables,
  swrOptions?: SWRRequestOptions<UserProfilesQuery>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useRoqPlatformUserProfiles', args || {}]);
  return useSWR<UserProfilesQuery, Error>(
    key,
    async () => {
      const result = await roq.roqPlatform.userProfiles(args);
      return result;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useRoqPlatformUserProfile(
  args: UserProfileQueryVariables,
  swrOptions?: SWRRequestOptions<UserProfileQuery>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useRoqPlatformUserProfile', args || {}]);
  return useSWR<UserProfileQuery, Error>(
    key,
    async () => {
      const result = await roq.roqPlatform.userProfile(args);
      return result;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useRoqPlatformRoles(args?: RolesQueryVariables, swrOptions?: SWRRequestOptions<RolesQuery>) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useRoqPlatformRoles', args || {}]);
  return useSWR<RolesQuery, Error>(
    key,
    async () => {
      const result = await roq.roqPlatform.roles(args);
      return result;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useRoqPlatformRole(args: RoleQueryVariables, swrOptions?: SWRRequestOptions<RoleQuery>) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useRoqPlatformRole', args || {}]);
  return useSWR<RoleQuery, Error>(
    key,
    async () => {
      const result = await roq.roqPlatform.role(args);
      return result;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useRoqPlatformUserInvites(
  args?: UserInvitesQueryVariables,
  swrOptions?: SWRRequestOptions<UserInvitesQuery>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useRoqPlatformUserInvites', args || {}]);
  return useSWR<UserInvitesQuery, Error>(
    key,
    async () => {
      const result = await roq.roqPlatform.userInvites(args);
      return result;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useRoqPlatformUserInvite(
  args: UserInviteQueryVariables,
  swrOptions?: SWRRequestOptions<UserInviteQuery>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useRoqPlatformUserInvite', args || {}]);
  return useSWR<UserInviteQuery, Error>(
    key,
    async () => {
      const result = await roq.roqPlatform.userInvite(args);
      return result;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useRoqPlatformFiles(args?: FilesQueryVariables, swrOptions?: SWRRequestOptions<FilesQuery>) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useRoqPlatformFiles', args || {}]);
  return useSWR<FilesQuery, Error>(
    key,
    async () => {
      const result = await roq.roqPlatform.files(args);
      return result;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useRoqPlatformFile(args: FileQueryVariables, swrOptions?: SWRRequestOptions<FileQuery>) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useRoqPlatformFile', args || {}]);
  return useSWR<FileQuery, Error>(
    key,
    async () => {
      const result = await roq.roqPlatform.file(args);
      return result;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useRoqPlatformFileCategoryContentTypes(
  args?: FileCategoryContentTypesQueryVariables,
  swrOptions?: SWRRequestOptions<FileCategoryContentTypesQuery>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useRoqPlatformFileCategoryContentTypes', args || {}]);
  return useSWR<FileCategoryContentTypesQuery, Error>(
    key,
    async () => {
      const result = await roq.roqPlatform.fileCategoryContentTypes(args);
      return result;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useRoqPlatformFileCategoryContentGroup(
  args: FileCategoryContentGroupQueryVariables,
  swrOptions?: SWRRequestOptions<FileCategoryContentGroupQuery>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useRoqPlatformFileCategoryContentGroup', args || {}]);
  return useSWR<FileCategoryContentGroupQuery, Error>(
    key,
    async () => {
      const result = await roq.roqPlatform.fileCategoryContentGroup(args);
      return result;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useRoqPlatformFileCategoryContentGroups(
  args?: FileCategoryContentGroupsQueryVariables,
  swrOptions?: SWRRequestOptions<FileCategoryContentGroupsQuery>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useRoqPlatformFileCategoryContentGroups', args || {}]);
  return useSWR<FileCategoryContentGroupsQuery, Error>(
    key,
    async () => {
      const result = await roq.roqPlatform.fileCategoryContentGroups(args);
      return result;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useRoqPlatformFileCategories(
  args?: FileCategoriesQueryVariables,
  swrOptions?: SWRRequestOptions<FileCategoriesQuery>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useRoqPlatformFileCategories', args || {}]);
  return useSWR<FileCategoriesQuery, Error>(
    key,
    async () => {
      const result = await roq.roqPlatform.fileCategories(args);
      return result;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useRoqPlatformFileCategory(
  args: FileCategoryQueryVariables,
  swrOptions?: SWRRequestOptions<FileCategoryQuery>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useRoqPlatformFileCategory', args || {}]);
  return useSWR<FileCategoryQuery, Error>(
    key,
    async () => {
      const result = await roq.roqPlatform.fileCategory(args);
      return result;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useRoqPlatformTenant(args: TenantQueryVariables, swrOptions?: SWRRequestOptions<TenantQuery>) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useRoqPlatformTenant', args || {}]);
  return useSWR<TenantQuery, Error>(
    key,
    async () => {
      const result = await roq.roqPlatform.tenant(args);
      return result;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}
