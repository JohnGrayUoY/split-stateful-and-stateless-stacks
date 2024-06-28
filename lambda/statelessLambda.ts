import { env } from 'process';

export const handler = () => {
  console.log(
    `I am stateless and I have access to the ${env.TABLE_NAME} table in the statefulNestedStack!`
  );
};
