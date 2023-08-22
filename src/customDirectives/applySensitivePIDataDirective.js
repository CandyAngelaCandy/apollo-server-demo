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
          
          // define the field resolve logic
          return redactValue();
        };
        return fieldConfig;
      }

      return;
    },
  });
};