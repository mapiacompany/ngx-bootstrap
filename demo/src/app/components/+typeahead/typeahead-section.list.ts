import { DemoTypeaheadBasicComponent } from './demos/basic/basic';
import { DemoTypeaheadItemTemplateComponent } from './demos/item-template/item-template';
import { DemoTypeaheadFieldComponent } from './demos/field/field';
import { DemoTypeaheadAsyncComponent } from './demos/async/async';
import { DemoTypeaheadReactiveFormComponent } from './demos/reactive-form/reactive-form';
import { DemoTypeaheadGroupingComponent } from './demos/grouping/grouping';
import { DemoTypeaheadDropupComponent } from './demos/dropup/dropup';
import { DemoTypeaheadScrollableComponent } from './demos/scrollable/scrollable';
import { DemoTypeaheadDelayComponent } from './demos/delay/delay';
import { DemoTypeaheadLatinizeComponent } from './demos/latinize/latinize';
import { DemoTypeaheadNoResultComponent } from './demos/no-result/no-result';
import { DemoTypeaheadOnBlurComponent } from './demos/on-blur/on-blur';
import { DemoTypeaheadFormComponent } from './demos/form/form';
import { DemoTypeaheadContainerComponent } from './demos/container/container';
import { DemoTypeaheadSingleWorldComponent } from './demos/single-world/single-world';
import { DemoTypeaheadPhraseDelimitersComponent } from './demos/phrase-delimiters/phrase-delimiters';
import { DemoTypeaheadOnSelectComponent } from './demos/on-select/on-select';

import { ContentSection } from '../../docs/models/content-section.model';
import { DemoTopSectionComponent } from '../../docs/demo-section-components/demo-top-section';
import { ExamplesComponent } from '../../docs/demo-section-components/demo-examples-section';
import { ApiSectionsComponent } from '../../docs/demo-section-components/demo-api-section';

import { NgApiDocComponent } from '../../docs/api-docs';

export const demoComponentContent: ContentSection[] = [
  {
    name: 'Usage',
    anchor: 'usage',
    outlet: DemoTopSectionComponent,
    content: {
      doc: require('!!raw-loader?lang=typescript!./docs/usage.md')
    }
  },
  {
    name: 'Examples',
    anchor: 'examples',
    outlet: ExamplesComponent,
    content: [
      {
        title: 'Basic array',
        anchor: 'Basic-array',
        component: require('!!raw-loader?lang=typescript!./demos/basic/basic.ts'),
        html: require('!!raw-loader?lang=markup!./demos/basic/basic.html'),
        outlet: DemoTypeaheadBasicComponent
      },
      {
        title: 'Item template',
        anchor: 'item-template',
        component: require('!!raw-loader?lang=typescript!./demos/item-template/item-template.ts'),
        html: require('!!raw-loader?lang=markup!./demos/item-template/item-template.html'),
        outlet: DemoTypeaheadItemTemplateComponent
      },
      {
        title: 'Option field',
        anchor: 'option-field',
        component: require('!!raw-loader?lang=typescript!./demos/field/field.ts'),
        html: require('!!raw-loader?lang=markup!./demos/field/field.html'),
        outlet: DemoTypeaheadFieldComponent
      },
      {
        title: 'Async data',
        anchor: 'async-data',
        component: require('!!raw-loader?lang=typescript!./demos/async/async.ts'),
        html: require('!!raw-loader?lang=markup!./demos/async/async.html'),
        outlet: DemoTypeaheadAsyncComponent
      },
      {
        title: 'With delay',
        anchor: 'delay',
        description: `
          <p>Use to set minimal waiting time after last character typed before typeahead kicks-in.
          In example a typeahead appears with delay in 1 second</p>
        `,
        component: require('!!raw-loader?lang=typescript!./demos/delay/delay.ts'),
        html: require('!!raw-loader?lang=markup!./demos/delay/delay.html'),
        outlet: DemoTypeaheadDelayComponent
      },
      {
        title: 'Template-driven forms',
        anchor: 'forms',
        description: `
          <p>
            Typeahead can be used in template-driven forms. Keep in mind that value of <code>ngModel</code> is
            <code>string</code>
          </p>
        `,
        component: require('!!raw-loader?lang=typescript!./demos/form/form.ts'),
        html: require('!!raw-loader?lang=markup!./demos/form/form.html'),
        outlet: DemoTypeaheadFormComponent
      },
      {
        title: 'Reactive forms',
        anchor: 'reactive-forms',
        description: `
          <p>Typeahead can be used in reactive forms</p>
        `,
        component: require('!!raw-loader?lang=typescript!./demos/reactive-form/reactive-form.ts'),
        html: require('!!raw-loader?lang=markup!./demos/reactive-form/reactive-form.html'),
        outlet: DemoTypeaheadReactiveFormComponent
      },
      {
        title: 'Grouping results',
        anchor: 'grouping-results',
        component: require('!!raw-loader?lang=typescript!./demos/grouping/grouping.ts'),
        html: require('!!raw-loader?lang=markup!./demos/grouping/grouping.html'),
        outlet: DemoTypeaheadGroupingComponent
      },
      {
        title: 'Ignore spaces and order',
        anchor: 'single-world',
        component: require('!!raw-loader?lang=typescript!./demos/single-world/single-world.ts'),
        html: require('!!raw-loader?lang=markup!./demos/single-world/single-world.html'),
        description: `After setting <code>typeaheadSingleWords</code> input property to <code>true</code>
          order of typed symbols and spaces between them will be ignored. For example, <pre>zona ari</pre>
          will match with <pre>Arizona</pre>`,
        outlet: DemoTypeaheadSingleWorldComponent
      },
      {
        title: 'Phrase delimiters',
        anchor: 'phrase-delimiters',
        component: require('!!raw-loader?lang=typescript!./demos/phrase-delimiters/phrase-delimiters.ts'),
        html: require('!!raw-loader?lang=markup!./demos/phrase-delimiters/phrase-delimiters.html'),
        description: `Sets the word delimiter to match exact phrase. For example that are <code>&</code> and <code>,</code>`,
        outlet: DemoTypeaheadPhraseDelimitersComponent
      },
      {
        title: 'Dropup',
        anchor: 'dropup',
        component: require('!!raw-loader?lang=typescript!./demos/dropup/dropup.ts'),
        html: require('!!raw-loader?lang=markup!./demos/dropup/dropup.html'),
        outlet: DemoTypeaheadDropupComponent
      },
      {
        title: 'On blur',
        anchor: 'on-blur',
        description: `
         <p>Returns an option on which user lost a focus. To reproduce start typing the name of the state, then focus
         on one of the options with mouse or arrow keys and click outside of the typeahead</p>
        `,
        component: require('!!raw-loader?lang=typescript!./demos/on-blur/on-blur.ts'),
        html: require('!!raw-loader?lang=markup!./demos/on-blur/on-blur.html'),
        outlet: DemoTypeaheadOnBlurComponent
      },
      {
        title: 'Append to body',
        anchor: 'container',
        description: `
        <p>A selector specifying the element the typeahead should be appended to. Currently only supports "body".</p>
        `,
        component: require('!!raw-loader?lang=typescript!./demos/container/container.ts'),
        html: require('!!raw-loader?lang=markup!./demos/container/container.html'),
        outlet: DemoTypeaheadContainerComponent
      },
      {
        title: 'No result',
        anchor: 'no-result',
        description: `
         <p>Used to display the state when no matches were found. To see message
         "No Results Found" enter the value that doesn't match anything from the list</p>
        `,
        component: require('!!raw-loader?lang=typescript!./demos/no-result/no-result.ts'),
        html: require('!!raw-loader?lang=markup!./demos/no-result/no-result.html'),
        outlet: DemoTypeaheadNoResultComponent
      },
      {
        title: 'Scrollable',
        anchor: 'scrollable',
        component: require('!!raw-loader?lang=typescript!./demos/scrollable/scrollable.ts'),
        html: require('!!raw-loader?lang=markup!./demos/scrollable/scrollable.html'),
        outlet: DemoTypeaheadScrollableComponent
      },
      {
        title: 'Latinize',
        anchor: 'latinize',
        description: `<p>Allow to match latin symbols. If true the word <strong>súper</strong> would match
          <strong>super</strong> and vice versa.</p>`,
        component: require('!!raw-loader?lang=typescript!./demos/latinize/latinize.ts'),
        html: require('!!raw-loader?lang=markup!./demos/latinize/latinize.html'),
        outlet: DemoTypeaheadLatinizeComponent
      },
      {
        title: 'On select',
        anchor: 'on-select',
        description: `
          <p>Fired when an option was selected, returns an object with this option</p>
        `,
        component: require('!!raw-loader?lang=typescript!./demos/on-select/on-select.ts'),
        html: require('!!raw-loader?lang=markup!./demos/on-select/on-select.html'),
        outlet: DemoTypeaheadOnSelectComponent
      }
    ]
  },
  {
    name: 'API Reference',
    anchor: 'api-reference',
    outlet: ApiSectionsComponent,
    content: [
      {
        title: 'TypeaheadDirective',
        anchor: 'TypeaheadDirective',
        outlet: NgApiDocComponent
      }
    ]
  }
];
