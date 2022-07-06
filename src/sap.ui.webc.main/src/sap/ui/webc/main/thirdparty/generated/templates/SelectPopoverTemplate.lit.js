sap.ui.define(['sap/ui/webc/common/thirdparty/base/renderer/LitRenderer'], function (litRender) { 'use strict';

	const block0 = (context, tags, suffix) => litRender.html`${ context.options ? block1(context, tags, suffix) : undefined }${ context.shouldOpenValueStateMessagePopover ? block13(context, tags, suffix) : undefined }`;
	const block1 = (context, tags, suffix) => suffix ? litRender.html`<${litRender.scopeTag("ui5-responsive-popover", tags, suffix)} hide-arrow _disable-initial-focus placement-type="Bottom" class="ui5-select-popover ${litRender.classMap(context.classes.popover)}" horizontal-align="Left" @ui5-after-open="${litRender.ifDefined(context._afterOpen)}" @ui5-before-open="${litRender.ifDefined(context._beforeOpen)}" @ui5-after-close="${litRender.ifDefined(context._afterClose)}" @keydown="${context._onkeydown}" style=${litRender.styleMap(context.styles.responsivePopover)}>${ context._isPhone ? block2(context, tags, suffix) : undefined }${ !context._isPhone ? block7(context, tags, suffix) : undefined }<${litRender.scopeTag("ui5-list", tags, suffix)} mode="SingleSelectAuto" separators="None" @mousedown="${context._itemMousedown}" @ui5-selection-change="${litRender.ifDefined(context._handleItemPress)}">${ litRender.repeat(context._syncedOptions, (item, index) => item._id || index, (item, index) => block12(item, index, context, tags, suffix)) }</${litRender.scopeTag("ui5-list", tags, suffix)}></${litRender.scopeTag("ui5-responsive-popover", tags, suffix)}>` : litRender.html`<ui5-responsive-popover hide-arrow _disable-initial-focus placement-type="Bottom" class="ui5-select-popover ${litRender.classMap(context.classes.popover)}" horizontal-align="Left" @ui5-after-open="${litRender.ifDefined(context._afterOpen)}" @ui5-before-open="${litRender.ifDefined(context._beforeOpen)}" @ui5-after-close="${litRender.ifDefined(context._afterClose)}" @keydown="${context._onkeydown}" style=${litRender.styleMap(context.styles.responsivePopover)}>${ context._isPhone ? block2(context, tags, suffix) : undefined }${ !context._isPhone ? block7(context, tags, suffix) : undefined }<ui5-list mode="SingleSelectAuto" separators="None" @mousedown="${context._itemMousedown}" @ui5-selection-change="${litRender.ifDefined(context._handleItemPress)}">${ litRender.repeat(context._syncedOptions, (item, index) => item._id || index, (item, index) => block12(item, index, context, tags, suffix)) }</ui5-list></ui5-responsive-popover>`;
	const block2 = (context, tags, suffix) => suffix ? litRender.html`<div slot="header" class="ui5-responsive-popover-header"><div class="row"><span>${litRender.ifDefined(context._headerTitleText)}</span><${litRender.scopeTag("ui5-button", tags, suffix)} class="ui5-responsive-popover-close-btn" icon="decline" design="Transparent" @click="${context._toggleRespPopover}"></${litRender.scopeTag("ui5-button", tags, suffix)}></div>${ context.hasValueStateText ? block3(context) : undefined }</div>` : litRender.html`<div slot="header" class="ui5-responsive-popover-header"><div class="row"><span>${litRender.ifDefined(context._headerTitleText)}</span><ui5-button class="ui5-responsive-popover-close-btn" icon="decline" design="Transparent" @click="${context._toggleRespPopover}"></ui5-button></div>${ context.hasValueStateText ? block3(context) : undefined }</div>`;
	const block3 = (context, tags, suffix) => litRender.html`<div class="${litRender.classMap(context.classes.popoverValueState)} row ui5-select-value-state-dialog-header">${ context.shouldDisplayDefaultValueStateMessage ? block4(context) : block5(context) }</div>`;
	const block4 = (context, tags, suffix) => litRender.html`${litRender.ifDefined(context.valueStateText)}`;
	const block5 = (context, tags, suffix) => litRender.html`${ litRender.repeat(context.valueStateMessageText, (item, index) => item._id || index, (item, index) => block6(item)) }`;
	const block6 = (item, index, context, tags, suffix) => litRender.html`${litRender.ifDefined(item)}`;
	const block7 = (context, tags, suffix) => litRender.html`${ context.hasValueStateText ? block8(context, tags, suffix) : undefined }`;
	const block8 = (context, tags, suffix) => suffix ? litRender.html`<div slot="header" class="${litRender.classMap(context.classes.popoverValueState)}" style=${litRender.styleMap(context.styles.responsivePopoverHeader)}><${litRender.scopeTag("ui5-icon", tags, suffix)} class="ui5-input-value-state-message-icon" name="${litRender.ifDefined(context._valueStateMessageInputIcon)}"></${litRender.scopeTag("ui5-icon", tags, suffix)}>${ context.shouldDisplayDefaultValueStateMessage ? block9(context) : block10(context) }</div>` : litRender.html`<div slot="header" class="${litRender.classMap(context.classes.popoverValueState)}" style=${litRender.styleMap(context.styles.responsivePopoverHeader)}><ui5-icon class="ui5-input-value-state-message-icon" name="${litRender.ifDefined(context._valueStateMessageInputIcon)}"></ui5-icon>${ context.shouldDisplayDefaultValueStateMessage ? block9(context) : block10(context) }</div>`;
	const block9 = (context, tags, suffix) => litRender.html`${litRender.ifDefined(context.valueStateText)}`;
	const block10 = (context, tags, suffix) => litRender.html`${ litRender.repeat(context.valueStateMessageText, (item, index) => item._id || index, (item, index) => block11(item)) }`;
	const block11 = (item, index, context, tags, suffix) => litRender.html`${litRender.ifDefined(item)}`;
	const block12 = (item, index, context, tags, suffix) => suffix ? litRender.html`<${litRender.scopeTag("ui5-li", tags, suffix)} id="${litRender.ifDefined(item.id)}-li" icon="${litRender.ifDefined(item.icon)}" ?selected="${item.selected}" ?focused="${item._focused}" title="${litRender.ifDefined(item.title)}" additional-text="${litRender.ifDefined(item.additionalText)}" ?aria-selected="${item.selected}" data-ui5-stable="${litRender.ifDefined(item.stableDomRef)}">${litRender.ifDefined(item.textContent)}</${litRender.scopeTag("ui5-li", tags, suffix)}>` : litRender.html`<ui5-li id="${litRender.ifDefined(item.id)}-li" icon="${litRender.ifDefined(item.icon)}" ?selected="${item.selected}" ?focused="${item._focused}" title="${litRender.ifDefined(item.title)}" additional-text="${litRender.ifDefined(item.additionalText)}" ?aria-selected="${item.selected}" data-ui5-stable="${litRender.ifDefined(item.stableDomRef)}">${litRender.ifDefined(item.textContent)}</ui5-li>`;
	const block13 = (context, tags, suffix) => suffix ? litRender.html`<${litRender.scopeTag("ui5-popover", tags, suffix)} skip-registry-update _disable-initial-focus prevent-focus-restore hide-arrow class="ui5-valuestatemessage-popover" placement-type="Bottom" horizontal-align="Left"><div slot="header" class="${litRender.classMap(context.classes.popoverValueState)}" style="${litRender.styleMap(context.styles.popoverHeader)}"><${litRender.scopeTag("ui5-icon", tags, suffix)} class="ui5-input-value-state-message-icon" name="${litRender.ifDefined(context._valueStateMessageInputIcon)}"></${litRender.scopeTag("ui5-icon", tags, suffix)}>${ context.shouldDisplayDefaultValueStateMessage ? block14(context) : block15(context) }</div></${litRender.scopeTag("ui5-popover", tags, suffix)}>` : litRender.html`<ui5-popover skip-registry-update _disable-initial-focus prevent-focus-restore hide-arrow class="ui5-valuestatemessage-popover" placement-type="Bottom" horizontal-align="Left"><div slot="header" class="${litRender.classMap(context.classes.popoverValueState)}" style="${litRender.styleMap(context.styles.popoverHeader)}"><ui5-icon class="ui5-input-value-state-message-icon" name="${litRender.ifDefined(context._valueStateMessageInputIcon)}"></ui5-icon>${ context.shouldDisplayDefaultValueStateMessage ? block14(context) : block15(context) }</div></ui5-popover>`;
	const block14 = (context, tags, suffix) => litRender.html`${litRender.ifDefined(context.valueStateText)}`;
	const block15 = (context, tags, suffix) => litRender.html`${ litRender.repeat(context.valueStateMessageText, (item, index) => item._id || index, (item, index) => block16(item)) }`;
	const block16 = (item, index, context, tags, suffix) => litRender.html`${litRender.ifDefined(item)}`;

	return block0;

});
