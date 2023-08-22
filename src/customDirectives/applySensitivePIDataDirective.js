import { mapSchema, getDirective, MapperKind } from '@graphql-tools/utils';
import { defaultFieldResolver } from 'graphql';

const redactValue = () => '*****';

export const applySensitivePIDataDirective = (
  schema,
  directiveName
) => {
  return mapSchema(schema, {
    [MapperKind.OBJECT_FIELD]: (fieldConfig) => {
      const sensitivePIDataDirective = getDirective(
        schema,
        fieldConfig,
        directiveName
      )?.[0];

      if (sensitivePIDataDirective) {
        const { resolve = defaultFieldResolver } = fieldConfig;

        fieldConfig.resolve = async function (source, args, context, info) {
          const {
            type = 'default',
            useDemoData = false,
          } = sensitivePIDataDirective;
          // const origResolveFunc = async () =>
          //   await resolve(source, args, context, info);

          // return redactSensitivePIData(useDemoData, type, origResolveFunc);

          // define the field resolve logic
          console.log("test directive--", directiveName)
          return redactValue();
        };
        return fieldConfig;
      }

      return;
    },
  });
};