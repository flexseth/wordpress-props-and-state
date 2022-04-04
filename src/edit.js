/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps } from '@wordpress/block-editor';

import { useState } from '@wordpress/element';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
 const Edit = ( props ) => {

	const {
		attributes: { 
			isLoaded,
			inputText
		}
	} = props;

	// for persisting block data 
	const [ blockData, setBlockData ] = useState( props.attributes );

	return (
		<p {...useBlockProps()}>

		<input type="text" value={props.attributes.inputText}
			// onChange={ (e) => { setBlockData(inputText: e.target.value) } }
			onChange={ 
				(newBlockData) => { 
					let inputText = newBlockData.target.value;
					setBlockData( {inputText} ) 
					// realtime changes in the editor
					props.setAttributes( {inputText} )	
					// saves block data for later use
				} }
		/>

		<br />

			{__(
				'Block Props And State – hello from the editor!',
				'block-props-and-state'
			)} 
		
		<br />Input text: { blockData.inputText }
		</p>
	);
}

export default Edit;

