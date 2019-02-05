/*global QUnit, sinon*/
sap.ui.define(["sap/ui/core/Core", "sap/ui/Device", "sap/ui/thirdparty/URI"],
function(oCore, Device, URI) {
	"use strict";

	var sControlId = "AvatarId",
		sImagePath = "test-resources/sap/f/images/Woman_avatar_01.png",
		sAbsoluteImageUrl = new URI(sap.ui.require.toUrl("test-resources/sap/f/images/Woman_avatar_01.png"), document.baseURI).href(),
		sIconPath = "sap-icon://lab",
		sPreAvatarSize = "Avatar's size is ",
		sPreAvatarShape = "Avatar's shape is ",
		sPreAvatarType = "Avatar's type is ",
		sDefaultIconRendered = "Avatar is a default icon",
		sPreAvatarFitType = "Avatar's image fit type is ";

	function createAvatar(oProps, sId) {
		var oAvatarProps = {};
		sId = sId || sControlId;

		if (oProps) {
			jQuery.extend(oAvatarProps, oProps);
		}

		return new sap.f.Avatar(sId, oAvatarProps);
	}

	function setupFunction() {
		this.oAvatar = createAvatar();
		this.oAvatar.placeAt("qunit-fixture");
		oCore.applyChanges();
	}

	function teardownFunction() {
		this.oAvatar.destroy();
	}

	/* tests */
	QUnit.module("Basic rendering", {
		beforeEach: function () {
			this.oAvatar = createAvatar({press: function () {}});
			this.oAvatar.placeAt("qunit-fixture");
			oCore.applyChanges();
		},
		afterEach: teardownFunction
	});

	QUnit.test("Avatar with press event only", function (assert) {
		var $oAvatar = this.oAvatar.$();

		assert.ok(document.getElementById(sControlId), "Avatar is rendered in the DOM");
		assert.ok($oAvatar.hasClass("sapFAvatar"), "Avatar is rendered with the Avatar class.");
		assert.ok($oAvatar.hasClass("sapFAvatarS"), sPreAvatarSize + "S");
		assert.ok($oAvatar.hasClass("sapFAvatarCircle"), sPreAvatarShape +  "Circle");
		assert.ok($oAvatar.hasClass("sapFAvatarIcon"), sPreAvatarType + "Icon");
		assert.ok($oAvatar.hasClass("sapMPointer"), "The cursor becomes pointer when hovering over the avatar");
		assert.ok(($oAvatar !== undefined) && ($oAvatar != null), "Avatar should not be null");
		assert.strictEqual($oAvatar.attr("role"), "button", "Aria role should be 'button'");
	});

	QUnit.module("Rendering different sizes", {
		beforeEach: setupFunction,
		afterEach: teardownFunction
	});

	QUnit.test("Avatar with displaySize set to 'XS'", function (assert) {
		this.oAvatar.setDisplaySize("XS");
		oCore.applyChanges();

		var $oAvatar = this.oAvatar.$();
		assert.ok($oAvatar.hasClass("sapFAvatarXS"), sPreAvatarSize + "XS");
	});

	QUnit.test("Avatar with displaySize set to 'S'", function (assert) {
		this.oAvatar.setDisplaySize("S");
		oCore.applyChanges();

		var $oAvatar = this.oAvatar.$();
		assert.ok($oAvatar.hasClass("sapFAvatarS"), sPreAvatarSize + "S");
	});

	QUnit.test("Avatar with displaySize set to 'M'", function (assert) {
		this.oAvatar.setDisplaySize("M");
		oCore.applyChanges();

		var $oAvatar = this.oAvatar.$();
		assert.ok($oAvatar.hasClass("sapFAvatarM"), sPreAvatarSize + "M");
	});

	QUnit.test("Avatar with displaySize set to 'L'", function (assert) {
		this.oAvatar.setDisplaySize("L");
		oCore.applyChanges();

		var $oAvatar = this.oAvatar.$();
		assert.ok($oAvatar.hasClass("sapFAvatarL"), sPreAvatarSize + "L");
	});

	QUnit.test("Avatar with displaySize set to 'XL'", function (assert) {
		this.oAvatar.setDisplaySize("XL");
		oCore.applyChanges();

		var $oAvatar = this.oAvatar.$();
		assert.ok($oAvatar.hasClass("sapFAvatarXL"), sPreAvatarSize + "XL");
	});

	QUnit.test("Avatar with displaySize set to 'Custom'", function (assert) {
		this.oAvatar.setDisplaySize("Custom");
		oCore.applyChanges();

		var $oAvatar = this.oAvatar.$();
		assert.ok($oAvatar.hasClass("sapFAvatarCustom"), sPreAvatarSize + "Custom");
	});

	QUnit.module("Rendering different shapes", {
		beforeEach: setupFunction,
		afterEach: teardownFunction
	});

	QUnit.test("Avatar with displayShape set to 'Circle'", function (assert) {
		this.oAvatar.setDisplayShape("Circle");
		oCore.applyChanges();

		var $oAvatar = this.oAvatar.$();
		assert.ok($oAvatar.hasClass("sapFAvatarCircle"), sPreAvatarShape + "Circle");
	});

	QUnit.test("Avatar with displayShape set to 'Square'", function (assert) {
		this.oAvatar.setDisplayShape("Square");
		oCore.applyChanges();

		var $oAvatar = this.oAvatar.$();
		assert.ok($oAvatar.hasClass("sapFAvatarSquare"), sPreAvatarShape + "Square");
	});

	QUnit.module("Rendering different types", {
		beforeEach: setupFunction,
		afterEach: teardownFunction
	});

	QUnit.test("Avatar with src leading to an icon", function (assert) {
		this.oAvatar.setSrc(sIconPath);
		oCore.applyChanges();

		var $oAvatar = this.oAvatar.$();
		assert.ok($oAvatar.hasClass("sapFAvatarIcon"), sPreAvatarType + "Icon");
	});

	QUnit.test("Avatar with src leading to an image", function (assert) {
		this.oAvatar.setSrc(sImagePath);
		oCore.applyChanges();

		var $oAvatar = this.oAvatar.$();
		assert.ok($oAvatar.hasClass("sapFAvatarImage"), sPreAvatarType + "Image");
	});

	QUnit.test("Avatar with src leading to an image has correct css style", function (assert) {
		var sExpectedOutputImage = Device.browser.safari ? // safari returns the absolute url
			'url(' + sAbsoluteImageUrl + ')' :
			'url("' + sImagePath + '")';
		this.oAvatar.setSrc(sImagePath);
		oCore.applyChanges();

		var $oAvatarImageHolder = this.oAvatar.$().find('.sapFAvatarImageHolder').get(0);
		assert.strictEqual($oAvatarImageHolder.style.backgroundImage, sExpectedOutputImage, "correct style value");
	});

	QUnit.test("Avatar with initials in valid format", function (assert) {
		this.oAvatar.setInitials("SR");
		oCore.applyChanges();

		var $oAvatar = this.oAvatar.$();
		assert.ok($oAvatar.hasClass("sapFAvatarInitials"), sPreAvatarType + "Initials");
	});

	QUnit.test("Avatar with initials consisting of three letters", function (assert) {
		this.oAvatar.setInitials("SRL");
		oCore.applyChanges();

		var $oAvatar = this.oAvatar.$();
		assert.ok($oAvatar.hasClass("sapFAvatarIcon"), sDefaultIconRendered);
	});

	QUnit.test("Avatar with initials consisting of no letters", function (assert) {
		this.oAvatar.setInitials("");
		oCore.applyChanges();

		var $oAvatar = this.oAvatar.$();
		assert.ok($oAvatar.hasClass("sapFAvatarIcon"), sDefaultIconRendered);
	});

	QUnit.test("Avatar with initials consisting of non-latin letters", function (assert) {
		this.oAvatar.setInitials("ЯЪ");
		oCore.applyChanges();

		var $oAvatar = this.oAvatar.$();
		assert.ok($oAvatar.hasClass("sapFAvatarIcon"), sDefaultIconRendered);
	});

	QUnit.module("Rendering different fit types", {
		beforeEach: setupFunction,
		afterEach: teardownFunction
	});

	QUnit.test("Avatar with imageFitType set to 'Cover'", function (assert) {
		this.oAvatar.setSrc(sImagePath);
		this.oAvatar.setImageFitType("Cover");
		oCore.applyChanges();

		var $oAvatar = this.oAvatar.$();
		assert.ok($oAvatar.find(".sapFAvatarImageHolder").hasClass("sapFAvatarImageCover"), sPreAvatarFitType + "Cover");
	});

	QUnit.test("Avatar with imageFitType set to 'Contain'", function (assert) {
		this.oAvatar.setSrc(sImagePath);
		this.oAvatar.setImageFitType("Contain");
		oCore.applyChanges();

		var $oAvatar = this.oAvatar.$();
		assert.ok($oAvatar.find(".sapFAvatarImageHolder").hasClass("sapFAvatarImageContain"), sPreAvatarFitType + "Contain");
	});

	QUnit.test("Show fallback initials when image source is invalid and initials are set and valid", function (assert) {
		//Arrange
		var done = assert.async(),
		oStub = sinon.stub(this.oAvatar, "_onImageError", function() {
			//Assert
			assert.ok(true, "When image inside sap.f.Avatar is not loaded, error callback launches");
			done();
		}),
		$oAvatar;
		this.oAvatar.setInitials("PB");
		assert.expect(2);

		//Act
		this.oAvatar.setSrc("_");
		oCore.applyChanges();

		//Assert
		$oAvatar = this.oAvatar.$();
		assert.equal($oAvatar.find(".sapFAvatarInitialsHolder").text(),"PB", "When type of sap.f.Avatar is 'Image'" +
		 " and initials are set we load fallback initials container");
		//Cleanup
		oStub.restore();
	});
	QUnit.test("Show fallback default Icon when image source is invalid and initials are not set", function (assert) {
		//Act
		this.oAvatar.setSrc("_");
		oCore.applyChanges();

		//Assert
		var $oAvatar = this.oAvatar.$();
		assert.ok($oAvatar.find(".sapUiIcon") !== undefined, "When type of sap.f.Avatar is 'Image'" +
		"we load fallback icon container");

	});

	QUnit.test("Fallback content is loaded, but hidden when sap.f.Avatar type Image has valid image source", function (assert) {
		//Arrange
		assert.expect(2);
		var done = assert.async(),
			that = this,

			oStub = sinon.stub(this.oAvatar, "_onImageLoad", function() {
				oStub.restore();
				that.oAvatar._onImageLoad();
				//Assert
				assert.ok(true, "When image inside sap.f.Avatar is loaded, success callback launches");
				assert.equal(that.oAvatar.$().find(".sapUiIcon").hasClass('sapUiHidden'), true, "Hiding fallback content valid");
				done();
			});
		//Act
		this.oAvatar.setSrc(sImagePath);
		oCore.applyChanges();
	});

	QUnit.module("Aggregations", {
		beforeEach: function () {
			this.oAvatar = new sap.f.Avatar();
		},
		afterEach: function () {
			this.oAvatar.destroy();
		}
	});

	QUnit.test("detailBox", function (oAssert) {
		// Assert
		oAssert.expect(7);

		// Arrange
		var oLightBox = new sap.m.LightBox(),
			fnDone = oAssert.async();

		// Act
		this.oAvatar.setDetailBox(oLightBox);

		// Assert
		oAssert.strictEqual(this.oAvatar.getDetailBox(), oLightBox, "Returned aggregation should be the same object");
		oAssert.ok(this.oAvatar._fnLightBoxOpen, "Internal method for opening the LightBox should be available");
		oAssert.ok(this.oAvatar.hasListeners("press"), "There should be a press event attached to the control");

		// Arrange
		this.oAvatar.setDetailBox(undefined);

		// Assert
		oAssert.notOk(this.oAvatar.getDetailBox(), "No LightBox is returned");
		oAssert.notOk(this.oAvatar._fnLightBoxOpen, "No internal method for opening the LightBox should be assigned");
		oAssert.notOk(this.oAvatar.hasListeners("press"), "There should no press listeners");

		// Arrange
		this.oAvatar.attachPress(function () {
			// Assert
			oAssert.ok(true, "Press event also fired");
			fnDone();
		});
		this.oAvatar.setDetailBox(oLightBox);

		// Act
		this.oAvatar.firePress();

		// Cleanup
		oLightBox.destroy();
	});

	QUnit.test("detailBox lifecycle and events", function (oAssert) {
		// Arrange
		var oLightBoxA = new sap.m.LightBox(),
			oLightBoxB = new sap.m.LightBox(),
			oAttachPressSpy = sinon.spy(this.oAvatar, "attachPress"),
			oDetachPressSpy = sinon.spy(this.oAvatar, "detachPress");

		// Act - set LightBox
		this.oAvatar.setDetailBox(oLightBoxA);

		oAssert.strictEqual(this.oAvatar.mEventRegistry.press.length, 1, "There should be 1 press event attached");
		oAssert.strictEqual(oAttachPressSpy.callCount, 1, "attachPress method should be called once");
		oAssert.strictEqual(oDetachPressSpy.callCount, 0, "detachPress method should not be called");

		// Act - replace with new LightBox
		oAttachPressSpy.reset();
		this.oAvatar.setDetailBox(oLightBoxB);

		// Assert
		oAssert.strictEqual(this.oAvatar.mEventRegistry.press.length, 1, "There should be 1 press event attached");
		oAssert.strictEqual(oAttachPressSpy.callCount, 1, "attachPress method should be called once");
		oAssert.strictEqual(oDetachPressSpy.callCount, 1, "detachPress method should be called once");

		// Act - replace with the same LightBox
		oAttachPressSpy.reset();
		oDetachPressSpy.reset();
		this.oAvatar.setDetailBox(oLightBoxB);

		// Assert
		oAssert.strictEqual(this.oAvatar.mEventRegistry.press.length, 1, "There should be 1 press event attached");
		oAssert.strictEqual(oAttachPressSpy.callCount, 0, "attachPress method should not be called");
		oAssert.strictEqual(oDetachPressSpy.callCount, 0, "detachPress method should not be called");

		// Act - replace with the same LightBox
		oDetachPressSpy.reset();
		this.oAvatar.setDetailBox(undefined);

		// Assert
		oAssert.strictEqual(oDetachPressSpy.callCount, 1, "detachPress method should be called once");

		// Cleanup
		oLightBoxA.destroy();
		oLightBoxB.destroy();
		oAttachPressSpy.restore();
		oDetachPressSpy.restore();
	});

	QUnit.test("cloning of press event handler", function (assert) {
		// Arrange
		var oLightBox = new sap.m.LightBox(),
			oAvatarClone;

		this.oAvatar.setDetailBox(oLightBox);

		// Act - clone the Avatar
		oAvatarClone = this.oAvatar.clone();

		// Assert
		assert.strictEqual(oAvatarClone.hasListeners("press"), true, "Press event listener is cloned");
		assert.notStrictEqual(this.oAvatar.mEventRegistry.press[0].oListener,
			oAvatarClone.mEventRegistry.press[0].oListener,
			"Press listener should not be a reference to the original listener");
	});

	QUnit.module("Functionality", {
		beforeEach: function () {
			this.oAvatar = createAvatar({ src: "/you/must/escape/single'quotes" });
			this.oAvatar.placeAt("qunit-fixture");
			oCore.applyChanges();
		},
		afterEach: teardownFunction
	});

	QUnit.test("URL escaping", function (assert) {
		var $oAvatar = this.oAvatar.$();
		// If src is not escaped, the css value would be invalid and jQuery would return 'none'
		assert.notStrictEqual($oAvatar.find(".sapFAvatarImageHolder").css("background-image"), "none", "src is properly escaped");
	});

	QUnit.module("Accessibility", {
		beforeEach: function () {
			this.oAvatar = createAvatar({ tooltip: "sampleTooltip" });
			this.oAvatar.placeAt("qunit-fixture");
			oCore.applyChanges();
		},
		afterEach: teardownFunction
	});

	QUnit.test("Check if tooltip is present", function (assert) {
		var $oAvatar = this.oAvatar.$();
		assert.strictEqual($oAvatar.prop("title"), "sampleTooltip", "Tooltip is present");
	});

	QUnit.test("Check ARIA specific roles", function (assert) {
		var $oAvatar = this.oAvatar.$(),
			sDefaultTooltip = oCore.getLibraryResourceBundle("sap.f").getText("AVATAR_TOOLTIP");

		assert.strictEqual($oAvatar.attr("role"), "img", "Aria role should be 'img'");
		assert.strictEqual($oAvatar.attr("aria-label"), sDefaultTooltip, "Aria-label should be the default one if no initials set");

		//act
		this.oAvatar.setInitials("BP");
		oCore.applyChanges();
		$oAvatar = this.oAvatar.$();

		//assert
		assert.strictEqual($oAvatar.attr("aria-label"), sDefaultTooltip + " sampleTooltip", "Aria-label should include the tooltip if both tootltip and initials are set");

		//act
		this.oAvatar.setTooltip("");
		oCore.applyChanges();
		$oAvatar = this.oAvatar.$();

		//assert
		assert.strictEqual($oAvatar.attr("aria-label"), sDefaultTooltip + " BP", "Aria-label should include the defined initials if no tooltip is set");

		//act
		this.oAvatar.setInitials("");
		oCore.applyChanges();
		$oAvatar = this.oAvatar.$();

		//assert
		assert.strictEqual($oAvatar.attr("aria-label"), sDefaultTooltip, "Aria-label should be the default one if no tooltip and initials are set");

		//act
		this.oAvatar.attachPress();

		//assert
		assert.strictEqual($oAvatar.attr("role"), "button", "Aria role should be 'button'");

		//act
		this.oAvatar.detachPress();

		//assert
		assert.strictEqual($oAvatar.attr("role"), "img", "Aria role should be 'img'");
	});
});