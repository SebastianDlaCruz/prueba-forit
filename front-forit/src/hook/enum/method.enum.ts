export const Methods = {
  POST: 'POST',
  GET: 'GET',
  PUT: 'PUT',
  DELETE: 'DELETE'
} as const;

export type Methods = typeof Methods[keyof typeof Methods];