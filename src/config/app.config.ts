interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Administrator'],
  customerRoles: ['Learner'],
  tenantRoles: ['Content Creator', 'Educator', 'Administrator', 'Content Reviewer'],
  tenantName: 'Startup',
  applicationName: 'AI Tutor',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Read content', 'Answer quizzes', 'View progress', 'View module'],
  ownerAbilities: ['Manage user', 'Manage startup', 'Manage content', 'Manage module'],
  getQuoteUrl: 'https://app.roq.ai/proposal/56177612-dd55-4e50-8e98-955d415e8a45',
};
