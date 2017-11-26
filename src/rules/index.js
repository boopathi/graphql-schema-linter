import { FieldsHaveDescriptions } from './fields_have_descriptions.js';
import { DeprecationsHaveAReason } from './deprecations_have_a_reason.js';
import { TypesHaveDescriptions } from './types_have_descriptions.js';
import { TypesAreCapitalized } from './types_are_capitalized.js';
import { EnumValuesSortedAlphabetically } from './enum_values_sorted_alphabetically';
import { EnumValuesAllCaps } from './enum_values_all_caps';
import { InputObjectValuesHaveDescriptions } from '../../src/rules/input_object_values_have_descriptions';
import { EnumValuesHaveDescriptions } from '../../src/rules/enum_values_have_descriptions';
import { FieldNamesAreLowerCamelCased } from '../../src/rules/field_names_are_lower_camel_cased';

module.exports = [
  EnumValuesSortedAlphabetically,
  EnumValuesAllCaps,
  FieldsHaveDescriptions,
  DeprecationsHaveAReason,
  TypesHaveDescriptions,
  TypesAreCapitalized,
  InputObjectValuesHaveDescriptions,
  EnumValuesHaveDescriptions,
  FieldNamesAreLowerCamelCased,
];
