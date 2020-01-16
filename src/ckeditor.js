/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import BalloonEditorBase from '@ckeditor/ckeditor5-editor-balloon/src/ballooneditor';

import Link from '@ckeditor/ckeditor5-link/src/link';
import Mention from '@ckeditor/ckeditor5-mention/src/mention';

export default class SimpleEditor extends BalloonEditorBase {}

// Plugins to include in the build.
SimpleEditor.builtinPlugins = [
	Link,
	Mention,
];

// Editor configuration.
SimpleEditor.defaultConfig = {
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en'
};
