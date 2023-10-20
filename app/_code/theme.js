import tailwindConfig from '@/tailwind.config';

const colors = tailwindConfig.theme.colors;

const theme = {
  name: 'mux',
  semanticHighlighting: true,
  tokenColors: [
    {
      settings: {
        foreground: colors.white,
      },
    },
    {
      scope: ['meta.embedded', 'source.groovy.embedded', 'string meta.image.inline.markdown'],
      settings: {
        foreground: colors.white,
      },
    },
    {
      name: 'Comment',
      scope: 'comment',
      settings: {
        foreground: colors.gray['5a'],
      },
    },
    {
      name: 'String',
      scope: 'string',
      settings: {
        foreground: colors.blue.neon,
      },
    },
    {
      name: 'Template Definition',
      scope: ['punctuation.definition.template-expression', 'punctuation.section.embedded'],
      settings: {
        foreground: colors.pink.DEFAULT,
      },
    },
    {
      name: 'Reset JavaScript string interpolation expression',
      scope: ['meta.template.expression'],
      settings: {
        foreground: colors.white,
      },
    },
    {
      name: 'Number',
      scope: 'constant.numeric',
      settings: {
        foreground: colors.yellow.DEFAULT,
      },
    },
    {
      name: 'Built-in constant',
      scope: 'constant.language',
      settings: {
        foreground: colors.yellow.DEFAULT,
      },
    },
    {
      name: 'User-defined constant',
      scope: 'constant.character, constant.other',
      settings: {
        foreground: colors.yellow.DEFAULT,
      },
    },
    {
      name: 'Variable',
      scope: 'variable',
      settings: {
        fontStyle: '',
        foreground: colors.white,
      },
    },
    {
      name: 'Keyword',
      scope: 'keyword',
      settings: {
        foreground: colors.pink.DEFAULT,
      },
    },
    {
      name: 'Storage',
      scope: 'storage',
      settings: {
        fontStyle: '',
        foreground: colors.pink.DEFAULT,
      },
    },
    {
      name: 'Storage type',
      scope: 'storage.type',
      settings: {
        foreground: colors.pink.DEFAULT,
      },
    },
    {
      name: 'Class name',
      scope: 'entity.name.type, entity.name.class, entity.name.namespace, entity.name.scope-resolution',
      settings: {
        fontStyle: 'underline',
        foreground: colors.purple.neon,
      },
    },
    {
      name: 'Inherited class',
      scope: 'entity.other.inherited-class',
      settings: {
        fontStyle: 'italic underline',
        foreground: colors.purple.neon,
      },
    },
    {
      name: 'Function name',
      scope: 'entity.name.function',
      settings: {
        fontStyle: '',
        foreground: colors.purple.neon,
      },
    },
    {
      name: 'Function argument',
      scope: 'variable.parameter',
      settings: {
        fontStyle: 'italic',
        foreground: colors.yellow.neon,
      },
    },
    {
      name: 'Tag name',
      scope: 'entity.name.tag',
      settings: {
        fontStyle: '',
        foreground: colors.pink.DEFAULT,
      },
    },
    {
      name: 'Tag attribute',
      scope: 'entity.other.attribute-name',
      settings: {
        fontStyle: '',
        foreground: colors.purple.neon,
      },
    },
    {
      name: 'Library function',
      scope: 'support.function',
      settings: {
        fontStyle: '',
        foreground: colors.green.neon,
      },
    },
    {
      name: 'Library constant',
      scope: 'support.constant',
      settings: {
        fontStyle: '',
        foreground: colors.green.neon,
      },
    },
    {
      name: 'Library class/type',
      scope: 'support.type, support.class',
      settings: {
        foreground: colors.green.neon,
      },
    },
    {
      name: 'Library variable',
      scope: 'support.other.variable',
      settings: {
        fontStyle: '',
      },
    },
    {
      name: 'Invalid',
      scope: 'invalid',
      settings: {
        fontStyle: '',
        foreground: colors.red.DEFAULT,
      },
    },
    {
      name: 'Invalid deprecated',
      scope: 'invalid.deprecated',
      settings: {
        foreground: colors.red.DEFAULT,
      },
    },
    {
      name: 'JSON String',
      scope: 'meta.structure.dictionary.json string.quoted.double.json',
      settings: {
        foreground: colors.gray['aa'],
      },
    },
    {
      name: 'diff.header',
      scope: 'meta.diff, meta.diff.header',
      settings: {
        foreground: '#75715E',
      },
    },
    {
      name: 'diff.deleted',
      scope: 'markup.deleted',
      settings: {
        foreground: colors.pink.DEFAULT,
      },
    },
    {
      name: 'diff.inserted',
      scope: 'markup.inserted',
      settings: {
        foreground: colors.purple.neon,
      },
    },
    {
      name: 'diff.changed',
      scope: 'markup.changed',
      settings: {
        foreground: colors.blue.neon,
      },
    },
    {
      scope: 'constant.numeric.line-number.find-in-files - match',
      settings: {
        foreground: '#AE81FFA0',
      },
    },
    {
      scope: 'entity.name.filename.find-in-files',
      settings: {
        foreground: colors.blue.neon,
      },
    },
    {
      name: 'Markup Quote',
      scope: 'markup.quote',
      settings: {
        foreground: colors.pink.DEFAULT,
      },
    },
    {
      name: 'Markup Lists',
      scope: 'markup.list',
      settings: {
        foreground: colors.blue.neon,
      },
    },
    {
      name: 'Markup Styling',
      scope: 'markup.bold, markup.italic',
      settings: {
        foreground: colors.green.neon,
      },
    },
    {
      name: 'Markup Inline',
      scope: 'markup.inline.raw',
      settings: {
        fontStyle: '',
        foreground: colors.yellow.neon,
      },
    },
    {
      name: 'Markup Headings',
      scope: 'markup.heading',
      settings: {
        foreground: colors.purple.neon,
      },
    },
    {
      name: 'Markup Setext Header',
      scope: 'markup.heading.setext',
      settings: {
        foreground: colors.purple.neon,
        fontStyle: 'bold',
        fontWeight: '700',
      },
    },
    {
      name: 'Markup Headings',
      scope: 'markup.heading.markdown',
      settings: {
        fontStyle: 'bold',
        fontWeight: '700',
      },
    },
    {
      name: 'Markdown Quote',
      scope: 'markup.quote.markdown',
      settings: {
        fontStyle: 'italic',
        foreground: '#75715E',
      },
    },
    {
      name: 'Markdown Bold',
      scope: 'markup.bold.markdown',
      settings: {
        fontStyle: 'bold',
        fontWeight: '700',
      },
    },
    {
      name: 'Markdown Link Title/Description',
      scope: 'string.other.link.title.markdown,string.other.link.description.markdown',
      settings: {
        foreground: colors.yellow.DEFAULT,
      },
    },
    {
      name: 'Markdown Underline Link/Image',
      scope: 'markup.underline.link.markdown,markup.underline.link.image.markdown',
      settings: {
        foreground: colors.blue.neon,
      },
    },
    {
      name: 'Markdown Emphasis',
      scope: 'markup.italic.markdown',
      settings: {
        fontStyle: 'italic',
      },
    },
    {
      scope: 'markup.strikethrough',
      settings: {
        fontStyle: 'strikethrough',
      },
    },
    {
      name: 'Markdown Punctuation Definition Link',
      scope: 'markup.list.unnumbered.markdown, markup.list.numbered.markdown',
      settings: {
        foreground: colors.white,
      },
    },
    {
      name: 'Markdown List Punctuation',
      scope: ['punctuation.definition.list.begin.markdown'],
      settings: {
        foreground: colors.purple.neon,
      },
    },
    {
      scope: 'token.info-token',
      settings: {
        foreground: '#6796e6',
      },
    },
    {
      scope: 'token.warn-token',
      settings: {
        foreground: '#cd9731',
      },
    },
    {
      scope: 'token.error-token',
      settings: {
        foreground: colors.red.DEFAULT,
      },
    },
    {
      scope: 'token.debug-token',
      settings: {
        foreground: '#b267e6',
      },
    },
    {
      name: 'this.self',
      scope: 'variable.language',
      settings: {
        foreground: colors.yellow.neon,
      },
    },
  ],
};
export default theme;
