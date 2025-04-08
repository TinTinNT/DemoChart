window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  BagDemo: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a81c4rvgNpHTJjZQ29yNcq1", "BagDemo");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var BagDemo = function(_super) {
      __extends(BagDemo, _super);
      function BagDemo() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      BagDemo.prototype.onLoad = function() {
        fgui.UIPackage.loadPackage("UI/Bag", this.onUILoaded.bind(this));
      };
      BagDemo.prototype.onUILoaded = function() {
        var _this = this;
        this._view = fgui.UIPackage.createObject("Bag", "Main").asCom;
        this._view.makeFullScreen();
        fgui.GRoot.inst.addChild(this._view);
        this._bagWindow = new BagWindow();
        this._view.getChild("bagBtn").onClick(function() {
          _this._bagWindow.show();
        }, this);
      };
      BagDemo.prototype.onDestroy = function() {
        fgui.UIPackage.removePackage("Bag");
      };
      BagDemo = __decorate([ ccclass ], BagDemo);
      return BagDemo;
    }(cc.Component);
    exports.default = BagDemo;
    var BagWindow = function(_super) {
      __extends(BagWindow, _super);
      function BagWindow() {
        return _super.call(this) || this;
      }
      BagWindow.prototype.onInit = function() {
        this.contentPane = fgui.UIPackage.createObject("Bag", "BagWin").asCom;
        this.center();
      };
      BagWindow.prototype.onShown = function() {
        var list = this.contentPane.getChild("list").asList;
        list.on(fgui.Event.CLICK_ITEM, this.onClickItem, this);
        list.itemRenderer = this.renderListItem.bind(this);
        list.setVirtual();
        list.numItems = 45;
      };
      BagWindow.prototype.renderListItem = function(index, obj) {
        obj.icon = "Icons/i" + Math.floor(10 * Math.random());
        obj.text = "" + Math.floor(100 * Math.random());
      };
      BagWindow.prototype.onClickItem = function(item) {
        this.contentPane.getChild("n11").asLoader.url = item.icon;
        this.contentPane.getChild("n13").text = item.icon;
      };
      return BagWindow;
    }(fgui.Window);
    cc._RF.pop();
  }, {} ],
  BasicsDemo: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c7330MFV6tAjYA/wxoXzY0t", "BasicsDemo");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var TestWin_1 = require("./TestWin");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var BasicDemo = function(_super) {
      __extends(BasicDemo, _super);
      function BasicDemo() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.startPos = new cc.Vec2();
        return _this;
      }
      BasicDemo.prototype.onLoad = function() {
        fgui.UIConfig.verticalScrollBar = "ui://Basics/ScrollBar_VT";
        fgui.UIConfig.horizontalScrollBar = "ui://Basics/ScrollBar_HZ";
        fgui.UIConfig.popupMenu = "ui://Basics/PopupMenu";
        fgui.UIConfig.buttonSound = "ui://Basics/click";
        fgui.UIPackage.loadPackage("UI/Basics", this.onUILoaded.bind(this));
      };
      BasicDemo.prototype.onUILoaded = function() {
        this._view = fgui.UIPackage.createObject("Basics", "Main").asCom;
        this._view.makeFullScreen();
        fgui.GRoot.inst.addChild(this._view);
        this._backBtn = this._view.getChild("btn_Back");
        this._backBtn.visible = false;
        this._backBtn.onClick(this.onClickBack, this);
        this._demoContainer = this._view.getChild("container").asCom;
        this._cc = this._view.getController("c1");
        var cnt = this._view.numChildren;
        for (var i = 0; i < cnt; i++) {
          var obj = this._view.getChildAt(i);
          null != obj.group && "btns" == obj.group.name && obj.onClick(this.runDemo, this);
        }
        this._demoObjects = {};
      };
      BasicDemo.prototype.onDestroy = function() {
        fgui.UIConfig.verticalScrollBar = "";
        fgui.UIConfig.horizontalScrollBar = "";
        fgui.UIConfig.popupMenu = "";
        fgui.UIConfig.buttonSound = "";
        fgui.UIPackage.removePackage("Basics");
      };
      BasicDemo.prototype.runDemo = function(evt) {
        var type = fgui.GObject.cast(evt.currentTarget).name.substr(4);
        var obj = this._demoObjects[type];
        if (null == obj) {
          obj = fgui.UIPackage.createObject("Basics", "Demo_" + type).asCom;
          this._demoObjects[type] = obj;
        }
        this._demoContainer.removeChildren();
        this._demoContainer.addChild(obj);
        this._cc.selectedIndex = 1;
        this._backBtn.visible = true;
        switch (type) {
         case "Button":
          this.playButton();
          break;

         case "Text":
          this.playText();
          break;

         case "List":
          this.playList();
          break;

         case "Window":
          this.playWindow();
          break;

         case "Popup":
          this.playPopup();
          break;

         case "Drag&Drop":
          this.playDragDrop();
          break;

         case "Depth":
          this.playDepth();
          break;

         case "Grid":
          this.playGrid();
          break;

         case "ProgressBar":
          this.playProgressBar();
        }
      };
      BasicDemo.prototype.onClickBack = function(evt) {
        this._cc.selectedIndex = 0;
        this._backBtn.visible = false;
      };
      BasicDemo.prototype.playButton = function() {
        var obj = this._demoObjects["Button"];
        obj.getChild("n34").onClick(this.__clickButton, this);
      };
      BasicDemo.prototype.playList = function() {
        var obj = this._demoObjects["List"];
        obj.getChild("n0").asList.getChildAt(1).draggable = true;
        obj.getChild("n0").asList.getChildAt(1).on(fgui.Event.DRAG_START, this.onDragStart, this);
      };
      BasicDemo.prototype.onDragStart = function(evt) {
        var btn = fgui.GObject.cast(evt.currentTarget);
      };
      BasicDemo.prototype.__clickButton = function() {
        console.log("click button");
      };
      BasicDemo.prototype.playText = function() {
        var obj = this._demoObjects["Text"];
        obj.getChild("n12").on(fgui.Event.LINK, this.__clickLink, this);
        obj.getChild("n25").onClick(this.__clickGetInput, this);
      };
      BasicDemo.prototype.__clickLink = function(link) {
        var obj = this._demoObjects["Text"];
        obj.getChild("n12").text = "[img]ui://9leh0eyft9fj5f[/img][color=#FF0000]\u4f60\u70b9\u51fb\u4e86\u94fe\u63a5[/color]\uff1a" + link;
      };
      BasicDemo.prototype.__clickGetInput = function() {
        var obj = this._demoObjects["Text"];
        obj.getChild("n24").text = obj.getChild("n22").text;
      };
      BasicDemo.prototype.playWindow = function() {
        var obj = this._demoObjects["Window"];
        obj.getChild("n0").onClick(this.__clickWindowA, this);
        obj.getChild("n1").onClick(this.__clickWindowB, this);
      };
      BasicDemo.prototype.__clickWindowA = function() {
        null == this._winA && (this._winA = new TestWin_1.WindowA());
        this._winA.show();
      };
      BasicDemo.prototype.__clickWindowB = function() {
        null == this._winB && (this._winB = new TestWin_1.WindowB());
        this._winB.show();
      };
      BasicDemo.prototype.playPopup = function() {
        if (null == this._pm) {
          this._pm = new fgui.PopupMenu();
          this._pm.addItem("Item 1");
          this._pm.addItem("Item 2");
          this._pm.addItem("Item 3");
          this._pm.addItem("Item 4");
          if (null == this._popupCom) {
            this._popupCom = fgui.UIPackage.createObject("Basics", "Component12").asCom;
            this._popupCom.center();
          }
        }
        var obj = this._demoObjects["Popup"];
        var btn = obj.getChild("n0");
        btn.onClick(this.__clickPopup1, this);
        var btn2 = obj.getChild("n1");
        btn2.onClick(this.__clickPopup2, this);
      };
      BasicDemo.prototype.__clickPopup1 = function(evt) {
        var btn = fgui.GObject.cast(evt.currentTarget);
        this._pm.show(btn, true);
      };
      BasicDemo.prototype.__clickPopup2 = function() {
        fgui.GRoot.inst.showPopup(this._popupCom);
      };
      BasicDemo.prototype.playDragDrop = function() {
        var obj = this._demoObjects["Drag&Drop"];
        var btnA = obj.getChild("a");
        btnA.draggable = true;
        var btnB = obj.getChild("b").asButton;
        btnB.draggable = true;
        btnB.on(fgui.Event.DRAG_START, this.__onDragStart, this);
        var btnC = obj.getChild("c").asButton;
        btnC.icon = null;
        btnC.on(fgui.Event.DROP, this.__onDrop, this);
        var btnD = obj.getChild("d");
        btnD.draggable = true;
        var bounds = obj.getChild("bounds");
        var rect = bounds.localToGlobalRect(0, 0, bounds.width, bounds.height);
        rect = fgui.GRoot.inst.globalToLocalRect(rect.x, rect.y, rect.width, rect.height, rect);
        rect.x -= obj.parent.x;
        btnD.dragBounds = rect;
      };
      BasicDemo.prototype.__onDragStart = function(evt) {
        var btn = fgui.GObject.cast(evt.currentTarget);
        btn.stopDrag();
        fgui.DragDropManager.inst.startDrag(btn, btn.icon, btn.icon);
      };
      BasicDemo.prototype.__onDrop = function(target, data) {
        target.icon = data;
      };
      BasicDemo.prototype.playDepth = function() {
        var obj = this._demoObjects["Depth"];
        var testContainer = obj.getChild("n22").asCom;
        var fixedObj = testContainer.getChild("n0");
        fixedObj.sortingOrder = 100;
        fixedObj.draggable = true;
        var numChildren = testContainer.numChildren;
        var i = 0;
        while (i < numChildren) {
          var child = testContainer.getChildAt(i);
          if (child != fixedObj) {
            testContainer.removeChildAt(i);
            numChildren--;
          } else i++;
        }
        this.startPos.x = fixedObj.x;
        this.startPos.y = fixedObj.y;
        obj.getChild("btn0").onClick(this.__click1, this);
        obj.getChild("btn1").onClick(this.__click2, this);
      };
      BasicDemo.prototype.__click1 = function() {
        var graph = new fgui.GGraph();
        this.startPos.x += 10;
        this.startPos.y += 10;
        graph.setPosition(this.startPos.x, this.startPos.y);
        graph.setSize(150, 150);
        graph.drawRect(1, cc.Color.BLACK, cc.Color.RED);
        var obj = this._demoObjects["Depth"];
        obj.getChild("n22").asCom.addChild(graph);
      };
      BasicDemo.prototype.__click2 = function() {
        var graph = new fgui.GGraph();
        this.startPos.x += 10;
        this.startPos.y += 10;
        graph.setPosition(this.startPos.x, this.startPos.y);
        graph.setSize(150, 150);
        graph.drawRect(1, cc.Color.BLACK, cc.Color.GREEN);
        graph.sortingOrder = 200;
        var obj = this._demoObjects["Depth"];
        obj.getChild("n22").asCom.addChild(graph);
      };
      BasicDemo.prototype.playGrid = function() {
        var obj = this._demoObjects["Grid"];
        var list1 = obj.getChild("list1").asList;
        list1.removeChildrenToPool();
        var testNames = [ "\u82f9\u679c\u624b\u673a\u64cd\u4f5c\u7cfb\u7edf", "\u5b89\u5353\u624b\u673a\u64cd\u4f5c\u7cfb\u7edf", "\u5fae\u8f6f\u624b\u673a\u64cd\u4f5c\u7cfb\u7edf", "\u5fae\u8f6f\u684c\u9762\u64cd\u4f5c\u7cfb\u7edf", "\u82f9\u679c\u684c\u9762\u64cd\u4f5c\u7cfb\u7edf", "\u672a\u77e5\u64cd\u4f5c\u7cfb\u7edf" ];
        var testColors = [ cc.Color.YELLOW, cc.Color.RED, cc.Color.WHITE, cc.Color.BLUE ];
        var cnt = testNames.length;
        for (var i = 0; i < cnt; i++) {
          var item = list1.addItemFromPool().asButton;
          item.getChild("t0").text = "" + (i + 1);
          item.getChild("t1").text = testNames[i];
          item.getChild("t2").asTextField.color = testColors[Math.floor(4 * Math.random())];
          item.getChild("star").asProgress.value = (Math.floor(3 * Math.random()) + 1) / 3 * 100;
        }
        var list2 = obj.getChild("list2").asList;
        list2.removeChildrenToPool();
        for (var i = 0; i < cnt; i++) {
          var item = list2.addItemFromPool().asButton;
          item.getChild("cb").asButton.selected = false;
          item.getChild("t1").text = testNames[i];
          item.getChild("mc").asMovieClip.playing = i % 2 == 0;
          item.getChild("t3").text = "" + Math.floor(1e4 * Math.random());
        }
      };
      BasicDemo.prototype.playProgressBar = function() {
        var obj = this._demoObjects["ProgressBar"];
        this.schedule(this.__playProgress, .01);
      };
      BasicDemo.prototype.__playProgress = function() {
        var obj = this._demoObjects["ProgressBar"];
        var cnt = obj.numChildren;
        for (var i = 0; i < cnt; i++) {
          var child = obj.getChildAt(i);
          if (null != child) {
            child.value += 1;
            child.value > child.max && (child.value = 0);
          }
        }
      };
      BasicDemo = __decorate([ ccclass ], BasicDemo);
      return BasicDemo;
    }(cc.Component);
    exports.default = BasicDemo;
    cc._RF.pop();
  }, {
    "./TestWin": "TestWin"
  } ],
  ChatDemo: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "699b3BxGvdK2YxFGLKuWWoW", "ChatDemo");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var EmojiParser_1 = require("./EmojiParser");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Message = function() {
      function Message() {}
      return Message;
    }();
    var ChatDemo = function(_super) {
      __extends(ChatDemo, _super);
      function ChatDemo() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      ChatDemo.prototype.onLoad = function() {
        fgui.UIPackage.loadPackage("UI/Chat", this.onUILoaded.bind(this));
      };
      ChatDemo.prototype.onUILoaded = function() {
        this._view = fgui.UIPackage.createObject("Chat", "Main").asCom;
        this._view.makeFullScreen();
        fgui.GRoot.inst.addChild(this._view);
        this._messages = new Array();
        this._emojiParser = new EmojiParser_1.default();
        this._list = this._view.getChild("list").asList;
        this._list.setVirtual();
        this._list.itemProvider = this.getListItemResource.bind(this);
        this._list.itemRenderer = this.renderListItem.bind(this);
        this._input = this._view.getChild("input1").asTextInput;
        this._input.on(fgui.Event.Submit, this.onSubmit, this);
        this._view.getChild("btnSend1").onClick(this.onClickSendBtn, this);
        this._view.getChild("btnEmoji1").onClick(this.onClickEmojiBtn, this);
        this._emojiSelectUI = fgui.UIPackage.createObject("Chat", "EmojiSelectUI").asCom;
        this._emojiSelectUI.getChild("list").on(fgui.Event.CLICK_ITEM, this.onClickEmoji, this);
      };
      ChatDemo.prototype.addMsg = function(sender, senderIcon, msg, fromMe) {
        var isScrollBottom = this._list.scrollPane.isBottomMost;
        var newMessage = new Message();
        newMessage.sender = sender;
        newMessage.senderIcon = senderIcon;
        newMessage.msg = msg;
        newMessage.fromMe = fromMe;
        this._messages.push(newMessage);
        if (newMessage.fromMe && (1 == this._messages.length || Math.random() < .5)) {
          var replyMessage = new Message();
          replyMessage.sender = "FairyGUI";
          replyMessage.senderIcon = "r1";
          replyMessage.msg = "Today is a good day. [:gz]";
          replyMessage.fromMe = false;
          this._messages.push(replyMessage);
        }
        this._messages.length > 100 && this._messages.splice(0, this._messages.length - 100);
        this._list.numItems = this._messages.length;
        isScrollBottom && this._list.scrollPane.scrollBottom();
      };
      ChatDemo.prototype.getListItemResource = function(index) {
        var msg = this._messages[index];
        return msg.fromMe ? "ui://Chat/chatRight" : "ui://Chat/chatLeft";
      };
      ChatDemo.prototype.renderListItem = function(index, item) {
        var msg = this._messages[index];
        msg.fromMe || (item.getChild("name").text = msg.sender);
        item.icon = fgui.UIPackage.getItemURL("Chat", msg.senderIcon);
        item.getChild("msg").text = this._emojiParser.parse(msg.msg);
      };
      ChatDemo.prototype.onClickSendBtn = function() {
        var msg = this._input.text;
        if (!msg) return;
        this.addMsg("Creator", "r0", msg, true);
        this._input.text = "";
      };
      ChatDemo.prototype.onClickEmojiBtn = function(evt) {
        fgui.GRoot.inst.showPopup(this._emojiSelectUI, fgui.GObject.cast(evt.currentTarget), false);
      };
      ChatDemo.prototype.onClickEmoji = function(item) {
        this._input.text += "[:" + item.text + "]";
      };
      ChatDemo.prototype.onSubmit = function() {
        this.onClickSendBtn();
      };
      ChatDemo = __decorate([ ccclass ], ChatDemo);
      return ChatDemo;
    }(cc.Component);
    exports.default = ChatDemo;
    cc._RF.pop();
  }, {
    "./EmojiParser": "EmojiParser"
  } ],
  CooldownDemo: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f3c5aJphJxEJ54dAouwPVGP", "CooldownDemo");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var CooldownDemo = function(_super) {
      __extends(CooldownDemo, _super);
      function CooldownDemo() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      CooldownDemo.prototype.onLoad = function() {
        fgui.UIPackage.loadPackage("UI/Cooldown", this.onUILoaded.bind(this));
      };
      CooldownDemo.prototype.onUILoaded = function() {
        this._view = fgui.UIPackage.createObject("Cooldown", "Main").asCom;
        this._view.makeFullScreen();
        fgui.GRoot.inst.addChild(this._view);
        this._btn0 = this._view.getChild("b0").asProgress;
        this._btn1 = this._view.getChild("b1").asProgress;
        this._btn0.getChild("icon").icon = "Icons/k0";
        this._btn1.getChild("icon").icon = "Icons/k1";
        fgui.GTween.to(0, 100, 5).setTarget(this._btn0, "value").setRepeat(-1);
        fgui.GTween.to(10, 0, 10).setTarget(this._btn1, "value").setRepeat(-1);
      };
      CooldownDemo = __decorate([ ccclass ], CooldownDemo);
      return CooldownDemo;
    }(cc.Component);
    exports.default = CooldownDemo;
    cc._RF.pop();
  }, {} ],
  DemoEntry: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "58415Ru5g5KuaJAVvPDi7f8", "DemoEntry");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var MainMenu_1 = require("./MainMenu");
    var DemoEntry = function(_super) {
      __extends(DemoEntry, _super);
      function DemoEntry() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      DemoEntry.prototype.onLoad = function() {
        fgui.addLoadHandler();
        fgui.GRoot.create();
        this.node.on("start_demo", this.onDemoStart, this);
        this.addComponent(MainMenu_1.default);
      };
      DemoEntry.prototype.onDemoStart = function(demo) {
        this._currentDemo = demo;
        this._closeButton = fgui.UIPackage.createObject("MainMenu", "CloseButton");
        this._closeButton.setPosition(fgui.GRoot.inst.width - this._closeButton.width - 10, fgui.GRoot.inst.height - this._closeButton.height - 10);
        this._closeButton.addRelation(fgui.GRoot.inst, fgui.RelationType.Right_Right);
        this._closeButton.addRelation(fgui.GRoot.inst, fgui.RelationType.Bottom_Bottom);
        this._closeButton.sortingOrder = 1e5;
        this._closeButton.onClick(this.onDemoClosed, this);
        fgui.GRoot.inst.addChild(this._closeButton);
      };
      DemoEntry.prototype.onDemoClosed = function() {
        fgui.GRoot.inst.removeChildren(0, -1, true);
        this.node.removeComponent(this._currentDemo);
        this.addComponent(MainMenu_1.default);
      };
      DemoEntry.prototype.start = function() {};
      DemoEntry = __decorate([ ccclass ], DemoEntry);
      return DemoEntry;
    }(cc.Component);
    exports.default = DemoEntry;
    cc._RF.pop();
  }, {
    "./MainMenu": "MainMenu"
  } ],
  EmojiParser: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7fe11kNzUJPYr4Bmon2Vy9O", "EmojiParser");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var EmojiParser = function(_super) {
      __extends(EmojiParser, _super);
      function EmojiParser() {
        var _this = _super.call(this) || this;
        EmojiParser.TAGS.forEach(function(element) {
          _this._handlers[":" + element] = _this.onTag_Emoji;
        });
        return _this;
      }
      EmojiParser.prototype.onTag_Emoji = function(tagName, end, attr) {
        return "<img src='" + fgui.UIPackage.getItemURL("Chat", tagName.substring(1).toLowerCase()) + "'/>";
      };
      EmojiParser.TAGS = [ "88", "am", "bs", "bz", "ch", "cool", "dhq", "dn", "fd", "gz", "han", "hx", "hxiao", "hxiu" ];
      return EmojiParser;
    }(fgui.UBBParser);
    exports.default = EmojiParser;
    cc._RF.pop();
  }, {} ],
  FaryguiInput: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "30d80qGOaNDGpGn+AqVKPM0", "FaryguiInput");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function LibInit() {
      if (!fgui.GRoot["_inst"]) {
        fgui.addLoadHandler();
        fgui.UIConfig.defaultScrollDecelerationRate = .988;
        var n = new cc.Node("FairyGui");
        cc.game.addPersistRootNode(n);
        var r = new FaryguiInput(n);
        fgui.GRoot["_inst"] = r;
        n.active = false;
        r.enabled = false;
        r.node.active = false;
      }
    }
    function LoadPackage(path, onComplete) {
      LibInit();
      fgui.UIPackage.loadPackage(path, onComplete);
    }
    exports.LoadPackage = LoadPackage;
    var FaryguiInput = function(_super) {
      __extends(FaryguiInput, _super);
      function FaryguiInput(nParent) {
        var _this = _super.call(this) || this;
        _this.node.name = "FaryguiInput";
        nParent.addChild(_this.node);
        _this.onWinResize();
        var com = _this;
        var callPreDestroy = nParent["_onPreDestroy"];
        nParent["_onPreDestroy"] = function() {
          console.log("Farygui callPreDestroy");
          callPreDestroy.call(nParent);
          if (com.isDisposed) return;
          com.node.parent.removeAllChildren();
          com.dispose();
        };
        return _this;
      }
      Object.defineProperty(FaryguiInput.prototype, "isDisposed", {
        get: function() {
          return null == this.node || false == this.node.isValid;
        },
        enumerable: true,
        configurable: true
      });
      FaryguiInput.prototype.addChild = function(child) {
        _super.prototype.addChild.call(this, child);
        child.setSize(this.width, this.height);
        child.addRelation(this, fgui.RelationType.Width, true);
        child.addRelation(this, fgui.RelationType.Height, true);
        return child;
      };
      FaryguiInput.prototype.onWinResize = function() {
        if (this.isDisposed) return;
        if (!this.node) return;
        var n = this.node;
        if (!n.isValid || !n.parent || !n.parent.isValid) return;
        var pUi = n.parent;
        if (!pUi) return;
        var size = pUi.getContentSize();
        var anchorPoint = pUi.getAnchorPoint();
        var pX = -size.width * anchorPoint.x;
        var pY = size.height * (1 - anchorPoint.y);
        this.node.setPosition(pX, pY);
        this.setSize(size.width, size.height);
      };
      return FaryguiInput;
    }(fgui.GRoot);
    exports.FaryguiInput = FaryguiInput;
    cc._RF.pop();
  }, {} ],
  FaryguiListEx: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "271076f4AtBuolMDtrEgMKr", "FaryguiListEx");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Runable_1 = require("./Runable");
    var log = console.log;
    function ListRendererEx(list, itemRenderer) {
      var items = [];
      list.itemRenderer = function(index, item) {
        itemRenderer(index, item);
        if (!item["$items"]) {
          item["$items"] = items;
          items.push(item);
        }
      };
      if (list._virtual) return;
      var countRender = 0;
      var scrollPane = list.scrollPane;
      Runable_1.default.Attach(list.node, function() {
        var countR = 0;
        var top = scrollPane.posY;
        top < 0 && (top = 0);
        var bottom = top + list.height;
        var isSkip = false;
        for (var idx = 0; idx < items.length; idx++) {
          var item = items[idx];
          if (isSkip || item.y + item.height < top) item._node.active = false; else if (item.y - item.height > bottom) {
            item._node.active = false;
            isSkip = true;
          } else {
            item._node.active = true;
            countR++;
          }
        }
        if (countRender != countR) {
          countRender = countR;
          log("List count render", countR);
        }
      });
    }
    exports.ListRendererEx = ListRendererEx;
    cc._RF.pop();
  }, {
    "./Runable": "Runable"
  } ],
  FaryguiUtil: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0e32bjHIt9OWopZuNZrv3Qz", "FaryguiUtil");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var EventEX = function() {
      function EventEX() {
        this.TOUCH_BEGIN = "fui_touch_begin";
        this.TOUCH_MOVE = "fui_touch_move";
        this.TOUCH_END = "fui_touch_end";
        this.CLICK = "fui_click";
        this.ROLL_OVER = "fui_roll_over";
        this.ROLL_OUT = "fui_roll_out";
        this.MOUSE_WHEEL = "fui_mouse_wheel";
        this.DISPLAY = "fui_display";
        this.UNDISPLAY = "fui_undisplay";
        this.GEAR_STOP = "fui_gear_stop";
        this.LINK = "fui_text_link";
        this.Submit = "editing-return";
        this.TEXT_CHANGE = "text-changed";
        this.STATUS_CHANGED = "fui_status_changed";
        this.XY_CHANGED = "fui_xy_changed";
        this.SIZE_CHANGED = "fui_size_changed";
        this.SIZE_DELAY_CHANGE = "fui_size_delay_change";
        this.DRAG_START = "fui_drag_start";
        this.DRAG_MOVE = "fui_drag_move";
        this.DRAG_END = "fui_drag_end";
        this.DROP = "fui_drop";
        this.SCROLL = "fui_scroll";
        this.SCROLL_END = "fui_scroll_end";
        this.PULL_DOWN_RELEASE = "fui_pull_down_release";
        this.PULL_UP_RELEASE = "fui_pull_up_release";
        this.CLICK_ITEM = "fui_click_item";
      }
      return EventEX;
    }();
    var MapPaths = function() {
      function MapPaths(target) {
        this.map = {};
        this.doMap(target["_children"], "");
      }
      MapPaths.prototype.doMap = function(childs, path) {
        if (!childs || childs.length <= 0) return;
        for (var idx = 0; idx < childs.length; idx++) {
          var c = childs[idx];
          var p = path + c.name;
          this.map[p] = c;
          c["_children"] && this.doMap(c["_children"], p + "/");
        }
      };
      MapPaths.prototype.getChild = function(path) {
        var r = this.map[path];
        console.assert(null != r && void 0 != r, "error get path " + path);
        return r;
      };
      return MapPaths;
    }();
    exports.MapPaths = MapPaths;
    var FUtil = function() {
      function FUtil() {}
      FUtil.createMapPaths = function(target) {
        return new MapPaths(target);
      };
      FUtil.setOnceTapStart = function(com, listener, target) {
        com.node.once(cc.Node.EventType.TOUCH_START, listener, target);
      };
      FUtil.setTapStart = function(com, listener, target) {
        com.node.on(cc.Node.EventType.TOUCH_START, listener, target);
      };
      FUtil.setOnceTapEnd = function(com, listener, target) {
        com.node.once(cc.Node.EventType.TOUCH_END, listener, target);
      };
      FUtil.setClick = function(bt, listener, target) {
        void 0 === target && (target = null);
        bt.clearClick();
        bt.onClick(listener, target);
      };
      FUtil.tweenStop = function(target) {
        fgui.GTween.kill(target, null, null);
      };
      FUtil.stopScroll = function(list) {
        var scrollPane = list.scrollPane;
        if (!scrollPane) return;
        scrollPane.percY = scrollPane.percY;
        scrollPane.refresh();
      };
      FUtil.forceScrollBottom = function(list) {
        list.scrollPane.scrollBottom(false);
        list.scrollPane.refresh();
      };
      FUtil.scrollBottomAni = function(list) {
        list.scrollPane.refresh();
        list.scrollPane.scrollBottom(true);
      };
      FUtil.refresh = function(list) {
        list.scrollPane.refresh();
      };
      FUtil.isBottomMost = function(list) {
        if (list.scrollPane.isBottomMost) return true;
        if (list.scrollPane.percY >= .96) return true;
        return false;
      };
      FUtil.fadeIn = function(target, delay) {
        void 0 === delay && (delay = .01);
        fgui.GTween.kill(target, null, null);
        return fgui.GTween.to(target.alpha, 1, .25).setTarget(target, "alpha").setDelay(.01);
      };
      FUtil.fadeOut = function(target) {
        fgui.GTween.kill(target, null, null);
        return fgui.GTween.to(target.alpha, 0, .25).setTarget(target, "alpha");
      };
      FUtil.moveX = function(target, x) {
        return FUtil.moveXY(target, x, target.y);
      };
      FUtil.moveY = function(target, y) {
        return FUtil.moveXY(target, target.x, y);
      };
      FUtil.moveXY = function(target, x, y, duration, ease) {
        void 0 === duration && (duration = .2);
        void 0 === ease && (ease = fgui.EaseType.QuartOut);
        fgui.GTween.kill(target, null, null);
        return fgui.GTween.to2(target.x, target.y, x, y, duration).setEase(ease).setTarget(target, target.setPosition);
      };
      FUtil.toHeight = function(target, h, duration) {
        void 0 === duration && (duration = .2);
        return FUtil.toSize(target, target.width, h, duration);
      };
      FUtil.toHeightByD = function(target, h, fSpeed) {
        void 0 === fSpeed && (fSpeed = 1);
        var duration = .01;
        if (h != target.height) {
          var screenSize = cc.view.getVisibleSize();
          var d = Math.abs(h - target.height);
          if (d > screenSize.height) {
            h > screenSize.height ? h = screenSize.height : target.height > screenSize.height && (target.height = screenSize.height);
            duration = .001 * Math.abs(h - target.height) * fSpeed;
          } else duration = .001 * d * fSpeed;
        }
        return FUtil.toSize(target, target.width, h, cc.misc.clampf(duration, .01, .5), h > target.height ? fgui.EaseType.QuartIn : fgui.EaseType.QuartOut);
      };
      FUtil.kill = function(target) {
        fgui.GTween.kill(target, null, null);
      };
      FUtil.toSize = function(target, w, h, duration, ease) {
        void 0 === duration && (duration = .25);
        void 0 === ease && (ease = fgui.EaseType.QuartOut);
        fgui.GTween.kill(target, null, null);
        return fgui.GTween.to2(target.width, target.height, w, h, duration).setEase(ease).setTarget(target, target.setSize);
      };
      FUtil.toScaleY = function(target, y, duration, ease) {
        void 0 === duration && (duration = .25);
        void 0 === ease && (ease = fgui.EaseType.QuartOut);
        fgui.GTween.kill(target, null, null);
        return fgui.GTween.to(target.scaleY, y, duration).setEase(ease).setTarget(target, target.scaleY);
      };
      FUtil.centerH = function(target, offset) {
        void 0 === offset && (offset = 0);
        target.y = .5 * (target.parent.height - target.height) + offset;
      };
      FUtil.getSpriteFrame = function(image) {
        return image._content.spriteFrame;
      };
      FUtil.setSpriteFrame = function(image, sf) {
        image._content.spriteFrame = sf;
      };
      FUtil.openKeyboard = function(input) {
        if (!input._editBox) return;
        input._editBox.openKeyboard();
      };
      FUtil.hideKeyboard = function(input) {
        if (!input._editBox) return;
        input._editBox.blur();
      };
      FUtil.isTweening = function(target, propType) {
        return fgui.GTween.isTweening(target, propType);
      };
      FUtil.setCacheMode = function(target, cacheMode) {
        if (!target._label) return;
        target._label.cacheMode = cacheMode;
      };
      FUtil.setContentWidth = function(target, contentWidth) {
        target.width = contentWidth;
        target.autoSize = fgui.AutoSizeType.Height;
        target.maxWidth = contentWidth;
      };
      FUtil.updateRenderData = function(input) {
        if (!input._richText) return input.width;
        input._richText._layoutDirty = true;
        input._richText._updateRichText();
        return input._richText._labelWidth;
      };
      FUtil.getChilds = function(parent) {
        return parent["_children"];
      };
      FUtil.hideNode = function(com, hash) {
        var parent = com.node;
        var nn = parent[hash];
        nn && (nn.active = false);
      };
      FUtil.createNode = function(com, prefabEmoj, hash) {
        var parent = com.node;
        var nn = parent[hash];
        if (nn) {
          nn.active = true;
          return nn;
        }
        nn = cc.instantiate(prefabEmoj);
        parent.addChild(nn);
        parent[hash] = nn;
        return nn;
      };
      FUtil.Event = new EventEX();
      return FUtil;
    }();
    exports.default = FUtil;
    function isNullOrEmpty(text) {
      if (void 0 === text || null === text || "" === text || 0 === text.length) return true;
      return false;
    }
    exports.isNullOrEmpty = isNullOrEmpty;
    cc._RF.pop();
  }, {} ],
  GListEx: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "bc1c0HzucJGNob8hVKVt4fI", "GListEx");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Runable_1 = require("./Runable");
    var log = console.log;
    var warn = console.warn;
    var GListEx = function() {
      function GListEx() {}
      GListEx.addItemByUrl = function(list, index, url) {
        void 0 === url && (url = void 0);
        var _a;
        if (!list._virtualItems) {
          var obj = list.getFromPool(url);
          list.addChildAt(obj, index);
          return;
        }
        var c = list._virtualItems.splice(index, list._virtualItems.length - index);
        list._virtualItems.push({
          y: 0,
          width: list.viewWidth,
          height: 0,
          updateFlag: 0
        });
        c.length > 0 && (_a = list._virtualItems).push.apply(_a, c);
      };
      GListEx.removeItemEx = function(list, index) {
        var itemRemove = list._virtualItems[index];
        list._virtualItems.splice(index, 1);
        GListEx.doHide(list, itemRemove);
      };
      GListEx.doHide = function(list, item) {
        if (!item.obj) return;
        var obj = item.obj;
        item.obj = void 0;
        obj.countRefresh = 0;
        fgui.GTween.kill(obj, null, null);
        obj.visible = false;
        list.removeChildToPool(obj);
        GListEx.countObjCreate--;
        log("Obj remove", GListEx.countObjCreate);
      };
      GListEx.doShow = function(list, item, url) {
        if (item.obj) {
          warn("Obj not remove before");
          GListEx.doHide(list, item);
        }
        var obj = list.getFromPool(url);
        obj.y = item.y;
        list.addChild(obj);
        item.obj = obj;
        GListEx.countObjCreate++;
        list.autoResizeItem && obj.width != list.viewWidth && obj.setSize(list.viewWidth, obj.height, true);
        log("Obj create", GListEx.countObjCreate);
        return obj;
      };
      GListEx.countObjCreate = 0;
      return GListEx;
    }();
    exports.GListEx = GListEx;
    var GListFast = function() {
      function GListFast() {}
      GListFast.moveChileTo = function(child, start, end, duration) {
        child["setNodeY"] || (child["setNodeY"] = function(y) {
          var xv = child._x;
          var yv = -y;
          if (!child._pivotAsAnchor) {
            xv += child.node.anchorX * child._width;
            yv -= (1 - child.node.anchorY) * child._height;
          }
          if (child._pixelSnapping) {
            xv = Math.round(xv);
            yv = Math.round(yv);
          }
          child._node.setPosition(xv, yv);
        });
        fgui.GTween.to(start, end, duration).setEase(end > start ? fgui.EaseType.QuartIn : fgui.EaseType.QuartOut).setTarget(child, child.setNodeY);
      };
      GListFast.fastUpdateHeight = function(list, numItem, getInfo) {
        var isAni = true;
        var idx;
        var child;
        var curY = 0;
        var cw = 0, ch = 0;
        var viewWidth = list.viewWidth;
        var viewHeight = list.viewHeight;
        var lastVirtualItems = list._virtualItems;
        var virtualItems = [];
        list._virtualItems = virtualItems;
        if (lastVirtualItems) for (var idx_1 = 0; idx_1 < lastVirtualItems.length; idx_1++) {
          var item = lastVirtualItems[idx_1];
          if (idx_1 >= numItem) {
            GListEx.doHide(list, item);
            continue;
          }
          child = item.obj;
          var _a = getInfo(idx_1), url = _a.url, height = _a.height;
          child && child.resourceURL != url && GListEx.doHide(list, item);
        }
        for (idx = 0; idx < numItem; idx++) {
          var _b = getInfo(idx), url = _b.url, height = _b.height;
          child = lastVirtualItems && idx < lastVirtualItems.length ? lastVirtualItems[idx].obj : void 0;
          if (!child) {
            0 != curY && (curY += list._lineGap);
            virtualItems.push({
              y: curY,
              width: viewWidth,
              height: height,
              updateFlag: 0
            });
            curY += height;
            continue;
          }
          0 != curY && (curY += list._lineGap);
          if (isAni && child.countRefresh) {
            if (child.y != curY) {
              fgui.GTween.kill(child, null, null);
              var yFrom = child.countRefresh ? child.y : curY - list._lineGap;
              var d = .001 * Math.abs(curY - yFrom);
              d < .1 ? d = .1 : d > .5 && (d = .5);
              GListFast.moveChileTo(child, yFrom, curY, d);
              child._y = curY;
            }
          } else child.y = curY;
          child.countRefresh ? child.countRefresh++ : child.countRefresh = 1;
          list._autoResizeItem && child.width != viewWidth && child.setSize(viewWidth, child.height, true);
          var curYLast = curY;
          curY += child ? Math.ceil(child.height) : height;
          virtualItems.push({
            y: curYLast,
            width: viewWidth,
            height: curY - curYLast,
            updateFlag: 0,
            obj: child
          });
        }
        ch = curY;
        cw = Math.ceil(viewWidth);
        list.handleAlign(cw, ch);
        list.setBounds(0, 0, cw, ch);
        list._boundsChanged = false;
        var gList = list;
        gList["getInfo"] = getInfo;
        gList.updateBounds = function() {
          GListFast.updateBoundsFast(gList, getInfo, true);
        };
        if (!gList["$isCheck"]) {
          gList["$isCheck"] = true;
          var screenH_1 = cc.view.getVisibleSize().height;
          var topL_1 = -gList.localToGlobal(0, screenH_1).y;
          Runable_1.default.Attach(gList.node, function() {
            var top = -gList.localToGlobal(0, screenH_1).y;
            if (top != topL_1) {
              topL_1 = top;
              GListFast.updateBoundsFast(gList, gList["getInfo"], false);
            }
          });
        }
        if (numItem <= 0) return;
        gList._partner.callLater(gList.updateBounds);
      };
      GListFast.updateBoundsFast = function(gList, getInfo, isScroll) {
        void 0 === isScroll && (isScroll = false);
        var isAni = true;
        var viewWidth = gList.viewWidth;
        var viewHeight = gList.viewHeight;
        var virtualItems = gList._virtualItems;
        var screenH = cc.view.getVisibleSize().height;
        var top = -gList.localToGlobal(0, screenH).y;
        var bottom = top + screenH;
        var isSkip = false;
        var countRender = 0;
        var curY = 0;
        var _loop_1 = function(idx) {
          0 != curY && (curY += gList._lineGap);
          var item = virtualItems[idx];
          if (isSkip || item.y - item.height > bottom) {
            isSkip = true;
            GListEx.doHide(gList, item);
            curY += item.height;
            return "continue";
          }
          if (item.y + item.height < top) {
            GListEx.doHide(gList, item);
            curY += item.height;
            return "continue";
          }
          var _a = getInfo(idx), url = _a.url, height = _a.height;
          var obj = item.obj;
          if (obj) obj.visible = true; else if (isScroll) {
            obj = GListEx.doShow(gList, item, gList._defaultItem);
            item.height != obj.height && obj.setSize(viewWidth, item.height, true);
            obj._partner.unscheduleAllCallbacks();
            obj._partner.callLater(function() {
              GListEx.doHide(gList, item);
              var nObj = GListEx.doShow(gList, item, url);
              gList.itemRenderer(idx, nObj);
              item.height != Math.ceil(nObj.height);
            }, .01);
          } else obj = GListEx.doShow(gList, item, url);
          var child = item.obj;
          if (child) {
            child.countRefresh ? child.countRefresh++ : child.countRefresh = 1;
            !isScroll && child && child.resourceURL === url && gList.itemRenderer(idx, child);
            countRender++;
            if (child.y == curY) ; else if (isAni && child.countRefresh && isScroll) {
              fgui.GTween.kill(child, null, null);
              var yFrom = child.countRefresh ? child.y : curY - gList._lineGap;
              var d = .001 * Math.abs(curY - yFrom);
              d < .1 ? d = .1 : d > .5 && (d = .5);
              GListFast.moveChileTo(child, yFrom, curY, d);
              child._y = curY;
              item.y = curY;
            } else {
              child.y = curY;
              item.y = curY;
            }
          }
          curY += item.height;
        };
        for (var idx = 0; idx < virtualItems.length; idx++) _loop_1(idx);
        gList._boundsChanged = false;
      };
      return GListFast;
    }();
    exports.GListFast = GListFast;
    cc._RF.pop();
  }, {
    "./Runable": "Runable"
  } ],
  GuideDemo: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "90538zcVo5BC4L7vNae5TBQ", "GuideDemo");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var GuideDemo = function(_super) {
      __extends(GuideDemo, _super);
      function GuideDemo() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      GuideDemo.prototype.onLoad = function() {
        fgui.UIPackage.loadPackage("UI/Guide", this.onUILoaded.bind(this));
      };
      GuideDemo.prototype.onUILoaded = function() {
        var _this = this;
        this._view = fgui.UIPackage.createObject("Guide", "Main").asCom;
        this._view.makeFullScreen();
        fgui.GRoot.inst.addChild(this._view);
        this._guideLayer = fgui.UIPackage.createObject("Guide", "GuideLayer").asCom;
        this._guideLayer.makeFullScreen();
        this._guideLayer.addRelation(fgui.GRoot.inst, fgui.RelationType.Size);
        var bagBtn = this._view.getChild("bagBtn");
        bagBtn.onClick(function() {
          _this._guideLayer.removeFromParent();
        }, this);
        this._view.getChild("n2").onClick(function() {
          fgui.GRoot.inst.addChild(_this._guideLayer);
          var rect = bagBtn.localToGlobalRect(0, 0, bagBtn.width, bagBtn.height);
          rect = _this._guideLayer.globalToLocalRect(rect.x, rect.y, rect.width, rect.height);
          var window = _this._guideLayer.getChild("window");
          window.setSize(rect.width, rect.height);
          fgui.GTween.to2(window.x, window.y, rect.x, rect.y, .5).setTarget(window, window.setPosition);
        }, this);
      };
      GuideDemo = __decorate([ ccclass ], GuideDemo);
      return GuideDemo;
    }(cc.Component);
    exports.default = GuideDemo;
    cc._RF.pop();
  }, {} ],
  HitTestDemo: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c5ddcrHy1RKlKfVcjrvR8K0", "HitTestDemo");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var HitTestDemo = function(_super) {
      __extends(HitTestDemo, _super);
      function HitTestDemo() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      HitTestDemo.prototype.onLoad = function() {
        fgui.UIPackage.loadPackage("UI/HitTest", this.onUILoaded.bind(this));
      };
      HitTestDemo.prototype.onUILoaded = function() {
        this._view = fgui.UIPackage.createObject("HitTest", "Main").asCom;
        this._view.makeFullScreen();
        fgui.GRoot.inst.addChild(this._view);
      };
      HitTestDemo = __decorate([ ccclass ], HitTestDemo);
      return HitTestDemo;
    }(cc.Component);
    exports.default = HitTestDemo;
    cc._RF.pop();
  }, {} ],
  JoystickDemo: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "239750TVrtMKqHzUj8BAnml", "JoystickDemo");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var JoystickModule_1 = require("./JoystickModule");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var JoystickDemo = function(_super) {
      __extends(JoystickDemo, _super);
      function JoystickDemo() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      JoystickDemo.prototype.onLoad = function() {
        fgui.UIPackage.loadPackage("UI/Joystick", this.onUILoaded.bind(this));
      };
      JoystickDemo.prototype.onUILoaded = function() {
        this._view = fgui.UIPackage.createObject("Joystick", "Main").asCom;
        this._view.setSize(fgui.GRoot.inst.width, fgui.GRoot.inst.height);
        fgui.GRoot.inst.addChild(this._view);
        this._text = this._view.getChild("n9").asTextField;
        this._joystick = new JoystickModule_1.default(this._view);
        this._joystick.on(JoystickModule_1.default.JoystickMoving, this.onJoystickMoving, this);
        this._joystick.on(JoystickModule_1.default.JoystickUp, this.onJoystickUp, this);
      };
      JoystickDemo.prototype.onJoystickMoving = function(degree) {
        this._text.text = "" + degree;
      };
      JoystickDemo.prototype.onJoystickUp = function() {
        this._text.text = "";
      };
      JoystickDemo = __decorate([ ccclass ], JoystickDemo);
      return JoystickDemo;
    }(cc.Component);
    exports.default = JoystickDemo;
    cc._RF.pop();
  }, {
    "./JoystickModule": "JoystickModule"
  } ],
  JoystickModule: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4e2f6PKtSBK+pLtz/iWu7tF", "JoystickModule");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var JoystickModule = function(_super) {
      __extends(JoystickModule, _super);
      function JoystickModule(mainView) {
        var _this = _super.call(this) || this;
        _this._button = mainView.getChild("joystick").asButton;
        _this._button.changeStateOnClick = false;
        _this._thumb = _this._button.getChild("thumb");
        _this._touchArea = mainView.getChild("joystick_touch");
        _this._center = mainView.getChild("joystick_center");
        _this._InitX = _this._center.x + _this._center.width / 2;
        _this._InitY = _this._center.y + _this._center.height / 2;
        _this._touchId = -1;
        _this.radius = 150;
        _this._curPos = new cc.Vec2();
        _this._touchArea.on(fgui.Event.TOUCH_BEGIN, _this.onTouchDown, _this);
        _this._touchArea.on(fgui.Event.TOUCH_MOVE, _this.onTouchMove, _this);
        _this._touchArea.on(fgui.Event.TOUCH_END, _this.onTouchEnd, _this);
        return _this;
      }
      JoystickModule.prototype.trigger = function(evt) {
        this.onTouchDown(evt);
      };
      JoystickModule.prototype.onTouchDown = function(evt) {
        if (-1 == this._touchId) {
          this._touchId = evt.touchId;
          if (null != this._tweener) {
            this._tweener.kill();
            this._tweener = null;
          }
          fgui.GRoot.inst.globalToLocal(evt.pos.x, evt.pos.y, this._curPos);
          var bx = this._curPos.x;
          var by = this._curPos.y;
          this._button.selected = true;
          bx < 0 ? bx = 0 : bx > this._touchArea.width && (bx = this._touchArea.width);
          by > fgui.GRoot.inst.height ? by = fgui.GRoot.inst.height : by < this._touchArea.y && (by = this._touchArea.y);
          this._lastStageX = bx;
          this._lastStageY = by;
          this._startStageX = bx;
          this._startStageY = by;
          this._center.visible = true;
          this._center.x = bx - this._center.width / 2;
          this._center.y = by - this._center.height / 2;
          this._button.x = bx - this._button.width / 2;
          this._button.y = by - this._button.height / 2;
          var deltaX = bx - this._InitX;
          var deltaY = by - this._InitY;
          var degrees = 180 * Math.atan2(deltaY, deltaX) / Math.PI;
          this._thumb.rotation = degrees + 90;
          evt.captureTouch();
        }
      };
      JoystickModule.prototype.onTouchMove = function(evt) {
        if (-1 != this._touchId && evt.touchId == this._touchId) {
          var bx = evt.pos.x;
          var by = evt.pos.y;
          var moveX = bx - this._lastStageX;
          var moveY = by - this._lastStageY;
          this._lastStageX = bx;
          this._lastStageY = by;
          var buttonX = this._button.x + moveX;
          var buttonY = this._button.y + moveY;
          var offsetX = buttonX + this._button.width / 2 - this._startStageX;
          var offsetY = buttonY + this._button.height / 2 - this._startStageY;
          var rad = Math.atan2(offsetY, offsetX);
          var degree = 180 * rad / Math.PI;
          this._thumb.rotation = degree + 90;
          var maxX = this.radius * Math.cos(rad);
          var maxY = this.radius * Math.sin(rad);
          Math.abs(offsetX) > Math.abs(maxX) && (offsetX = maxX);
          Math.abs(offsetY) > Math.abs(maxY) && (offsetY = maxY);
          buttonX = this._startStageX + offsetX;
          buttonY = this._startStageY + offsetY;
          buttonX < 0 && (buttonX = 0);
          buttonY > fgui.GRoot.inst.height && (buttonY = fgui.GRoot.inst.height);
          this._button.x = buttonX - this._button.width / 2;
          this._button.y = buttonY - this._button.height / 2;
          this.emit(JoystickModule.JoystickMoving, degree);
        }
      };
      JoystickModule.prototype.onTouchEnd = function(evt) {
        if (-1 != this._touchId && evt.touchId == this._touchId) {
          this._touchId = -1;
          this._thumb.rotation = this._thumb.rotation + 180;
          this._center.visible = false;
          this._tweener = fgui.GTween.to2(this._button.x, this._button.y, this._InitX - this._button.width / 2, this._InitY - this._button.height / 2, .3).setTarget(this._button, this._button.setPosition).setEase(fgui.EaseType.CircOut).onComplete(this.onTweenComplete, this);
          this.emit(JoystickModule.JoystickUp);
        }
      };
      JoystickModule.prototype.onTweenComplete = function() {
        this._tweener = null;
        this._button.selected = false;
        this._thumb.rotation = 0;
        this._center.visible = true;
        this._center.x = this._InitX - this._center.width / 2;
        this._center.y = this._InitY - this._center.height / 2;
      };
      JoystickModule.JoystickMoving = "JoystickMoving";
      JoystickModule.JoystickUp = "JoystickUp";
      return JoystickModule;
    }(cc.EventTarget);
    exports.default = JoystickModule;
    cc._RF.pop();
  }, {} ],
  ListEffectDemo: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "31ce9LjE/VKmbak3/7EURKU", "ListEffectDemo");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var MailItem_1 = require("./MailItem");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ListEffectDemo = function(_super) {
      __extends(ListEffectDemo, _super);
      function ListEffectDemo() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      ListEffectDemo.prototype.onLoad = function() {
        fgui.UIPackage.loadPackage("UI/ListEffect", this.onUILoaded.bind(this));
      };
      ListEffectDemo.prototype.onUILoaded = function() {
        fgui.UIObjectFactory.setExtension("ui://ListEffect/mailItem", MailItem_1.default);
        this._view = fgui.UIPackage.createObject("ListEffect", "Main").asCom;
        this._view.setSize(fgui.GRoot.inst.width, fgui.GRoot.inst.height);
        fgui.GRoot.inst.addChild(this._view);
        this._list = this._view.getChild("mailList").asList;
        for (var i = 0; i < 10; i++) {
          var item = this._list.addItemFromPool();
          item.setFetched(i % 3 == 0);
          item.setRead(i % 2 == 0);
          item.setTime("5 Nov 2015 16:24:33");
          item.title = "Mail title here";
        }
        this._list.ensureBoundsCorrect();
        var delay = 0;
        for (var i = 0; i < 10; i++) {
          var item = this._list.getChildAt(i);
          if (!this._list.isChildInView(item)) break;
          item.playEffect(delay);
          delay += .2;
        }
      };
      ListEffectDemo = __decorate([ ccclass ], ListEffectDemo);
      return ListEffectDemo;
    }(cc.Component);
    exports.default = ListEffectDemo;
    cc._RF.pop();
  }, {
    "./MailItem": "MailItem"
  } ],
  LoopListDemo: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "652c7L3krpGZZ5l+UPVVN+t", "LoopListDemo");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var LoopListDemo = function(_super) {
      __extends(LoopListDemo, _super);
      function LoopListDemo() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      LoopListDemo.prototype.onLoad = function() {
        fgui.UIPackage.loadPackage("UI/LoopList", this.onUILoaded.bind(this));
      };
      LoopListDemo.prototype.onUILoaded = function() {
        this._view = fgui.UIPackage.createObject("LoopList", "Main").asCom;
        this._view.setSize(fgui.GRoot.inst.width, fgui.GRoot.inst.height);
        fgui.GRoot.inst.addChild(this._view);
        this._list = this._view.getChild("list").asList;
        this._list.setVirtualAndLoop();
        this._list.itemRenderer = this.renderListItem.bind(this);
        this._list.numItems = 5;
        this._list.on(fgui.Event.SCROLL, this.doSpecialEffect, this);
        this.doSpecialEffect();
      };
      LoopListDemo.prototype.doSpecialEffect = function() {
        var midX = this._list.scrollPane.posX + this._list.viewWidth / 2;
        var cnt = this._list.numChildren;
        for (var i = 0; i < cnt; i++) {
          var obj = this._list.getChildAt(i);
          var dist = Math.abs(midX - obj.x - obj.width / 2);
          if (dist > obj.width) obj.setScale(1, 1); else {
            var ss = 1 + .24 * (1 - dist / obj.width);
            obj.setScale(ss, ss);
          }
        }
        this._view.getChild("n3").text = "" + (this._list.getFirstChildInView() + 1) % this._list.numItems;
      };
      LoopListDemo.prototype.renderListItem = function(index, obj) {
        var item = obj;
        item.setPivot(.5, .5);
        item.icon = fgui.UIPackage.getItemURL("LoopList", "n" + (index + 1));
      };
      LoopListDemo = __decorate([ ccclass ], LoopListDemo);
      return LoopListDemo;
    }(cc.Component);
    exports.default = LoopListDemo;
    cc._RF.pop();
  }, {} ],
  MailItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8290aaZZ9ZJjL9dxP9cPV56", "MailItem");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var MailItem = function(_super) {
      __extends(MailItem, _super);
      function MailItem() {
        return _super.call(this) || this;
      }
      MailItem.prototype.onConstruct = function() {
        this._timeText = this.getChild("timeText").asTextField;
        this._readController = this.getController("IsRead");
        this._fetchController = this.getController("c1");
        this._trans = this.getTransition("t0");
      };
      MailItem.prototype.setTime = function(value) {
        this._timeText.text = value;
      };
      MailItem.prototype.setRead = function(value) {
        this._readController.selectedIndex = value ? 1 : 0;
      };
      MailItem.prototype.setFetched = function(value) {
        this._fetchController.selectedIndex = value ? 1 : 0;
      };
      MailItem.prototype.playEffect = function(delay) {
        this.visible = false;
        this._trans.play(null, 1, delay);
      };
      return MailItem;
    }(fgui.GButton);
    exports.default = MailItem;
    cc._RF.pop();
  }, {} ],
  MainMenu: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fbc33X7eN1Fc7nVyqQP9Oz1", "MainMenu");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var BasicsDemo_1 = require("./BasicsDemo");
    var TransitionDemo_1 = require("./TransitionDemo");
    var VirtualListDemo_1 = require("./VirtualListDemo");
    var LoopListDemo_1 = require("./LoopListDemo");
    var PullToRefreshDemo_1 = require("./PullToRefreshDemo");
    var ModalWaitingDemo_1 = require("./ModalWaitingDemo");
    var JoystickDemo_1 = require("./JoystickDemo");
    var BagDemo_1 = require("./BagDemo");
    var ListEffectDemo_1 = require("./ListEffectDemo");
    var GuideDemo_1 = require("./GuideDemo");
    var CooldownDemo_1 = require("./CooldownDemo");
    var HitTestDemo_1 = require("./HitTestDemo");
    var ChatDemo_1 = require("./ChatDemo");
    var ScrollPaneDemo_1 = require("./ScrollPaneDemo");
    var TreeViewDemo_1 = require("./TreeViewDemo");
    var MainMenu = function(_super) {
      __extends(MainMenu, _super);
      function MainMenu() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      MainMenu.prototype.onLoad = function() {
        fgui.UIPackage.loadPackage("UI/MainMenu", this.onUILoaded.bind(this));
      };
      MainMenu.prototype.onUILoaded = function() {
        fgui.UIPackage.addPackage("UI/MainMenu");
        this._view = fgui.UIPackage.createObject("MainMenu", "Main").asCom;
        this._view.makeFullScreen();
        fgui.GRoot.inst.addChild(this._view);
        this._view.getChild("n1").onClick(function() {
          this.startDemo(BasicsDemo_1.default);
        }, this);
        this._view.getChild("n2").onClick(function() {
          this.startDemo(TransitionDemo_1.default);
        }, this);
        this._view.getChild("n4").onClick(function() {
          this.startDemo(VirtualListDemo_1.default);
        }, this);
        this._view.getChild("n5").onClick(function() {
          this.startDemo(LoopListDemo_1.default);
        }, this);
        this._view.getChild("n6").onClick(function() {
          this.startDemo(HitTestDemo_1.default);
        }, this);
        this._view.getChild("n7").onClick(function() {
          this.startDemo(PullToRefreshDemo_1.default);
        }, this);
        this._view.getChild("n8").onClick(function() {
          this.startDemo(ModalWaitingDemo_1.default);
        }, this);
        this._view.getChild("n9").onClick(function() {
          this.startDemo(JoystickDemo_1.default);
        }, this);
        this._view.getChild("n10").onClick(function() {
          this.startDemo(BagDemo_1.default);
        }, this);
        this._view.getChild("n11").onClick(function() {
          this.startDemo(ChatDemo_1.default);
        }, this);
        this._view.getChild("n12").onClick(function() {
          this.startDemo(ListEffectDemo_1.default);
        }, this);
        this._view.getChild("n13").onClick(function() {
          this.startDemo(ScrollPaneDemo_1.default);
        }, this);
        this._view.getChild("n14").onClick(function() {
          this.startDemo(TreeViewDemo_1.default);
        }, this);
        this._view.getChild("n15").onClick(function() {
          this.startDemo(GuideDemo_1.default);
        }, this);
        this._view.getChild("n16").onClick(function() {
          this.startDemo(CooldownDemo_1.default);
        }, this);
      };
      MainMenu.prototype.onDestroy = function() {
        this._view.dispose();
      };
      MainMenu.prototype.startDemo = function(demoClass) {
        var demo = this.addComponent(demoClass);
        this.node.emit("start_demo", demo);
        this.destroy();
      };
      MainMenu = __decorate([ ccclass ], MainMenu);
      return MainMenu;
    }(cc.Component);
    exports.default = MainMenu;
    cc._RF.pop();
  }, {
    "./BagDemo": "BagDemo",
    "./BasicsDemo": "BasicsDemo",
    "./ChatDemo": "ChatDemo",
    "./CooldownDemo": "CooldownDemo",
    "./GuideDemo": "GuideDemo",
    "./HitTestDemo": "HitTestDemo",
    "./JoystickDemo": "JoystickDemo",
    "./ListEffectDemo": "ListEffectDemo",
    "./LoopListDemo": "LoopListDemo",
    "./ModalWaitingDemo": "ModalWaitingDemo",
    "./PullToRefreshDemo": "PullToRefreshDemo",
    "./ScrollPaneDemo": "ScrollPaneDemo",
    "./TransitionDemo": "TransitionDemo",
    "./TreeViewDemo": "TreeViewDemo",
    "./VirtualListDemo": "VirtualListDemo"
  } ],
  MaskEx: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "90426pRN1JEe4m1wAPM/6gU", "MaskEx");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !call || "object" !== typeof call && "function" !== typeof call ? self : call;
    }
    function _inherits(subClass, superClass) {
      if ("function" !== typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
    }
    var MaskEx = exports.MaskEx = function(_cc$Mask) {
      _inherits(MaskEx, _cc$Mask);
      function MaskEx() {
        _classCallCheck(this, MaskEx);
        return _possibleConstructorReturn(this, (MaskEx.__proto__ || Object.getPrototypeOf(MaskEx)).apply(this, arguments));
      }
      return MaskEx;
    }(cc.Mask);
    cc._RF.pop();
  }, {} ],
  ModalWaitingDemo: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f2349wZ3TxE8JEqw3kqQ/8y", "ModalWaitingDemo");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var TestWin_1 = require("./TestWin");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ModalWaitingDemo = function(_super) {
      __extends(ModalWaitingDemo, _super);
      function ModalWaitingDemo() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      ModalWaitingDemo.prototype.onLoad = function() {
        fgui.UIConfig.globalModalWaiting = "ui://ModalWaiting/GlobalModalWaiting";
        fgui.UIConfig.windowModalWaiting = "ui://ModalWaiting/WindowModalWaiting";
        fgui.UIPackage.loadPackage("UI/ModalWaiting", this.onUILoaded.bind(this));
      };
      ModalWaitingDemo.prototype.onUILoaded = function() {
        this._view = fgui.UIPackage.createObject("ModalWaiting", "Main").asCom;
        this._view.setSize(fgui.GRoot.inst.width, fgui.GRoot.inst.height);
        fgui.GRoot.inst.addChild(this._view);
        this._testWin = new TestWin_1.TestWin();
        this._testWin.center();
        this._view.getChild("n0").onClick(function() {
          this._testWin.show();
        }, this);
        fgui.GRoot.inst.showModalWait();
        this.scheduleOnce(function() {
          fgui.GRoot.inst.closeModalWait();
        }, 3);
      };
      ModalWaitingDemo = __decorate([ ccclass ], ModalWaitingDemo);
      return ModalWaitingDemo;
    }(cc.Component);
    exports.default = ModalWaitingDemo;
    cc._RF.pop();
  }, {
    "./TestWin": "TestWin"
  } ],
  PullToRefreshDemo: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d80b3hSqkxCa4GThPqDwQNI", "PullToRefreshDemo");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ScrollPaneHeader_1 = require("./ScrollPaneHeader");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var PullToRefreshDemo = function(_super) {
      __extends(PullToRefreshDemo, _super);
      function PullToRefreshDemo() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      PullToRefreshDemo.prototype.onLoad = function() {
        fgui.UIObjectFactory.setExtension("ui://PullToRefresh/Header", ScrollPaneHeader_1.default);
        fgui.UIPackage.loadPackage("UI/PullToRefresh", this.onUILoaded.bind(this));
      };
      PullToRefreshDemo.prototype.onUILoaded = function() {
        this._view = fgui.UIPackage.createObject("PullToRefresh", "Main").asCom;
        this._view.makeFullScreen();
        fgui.GRoot.inst.addChild(this._view);
        this._list1 = this._view.getChild("list1").asList;
        this._list1.itemRenderer = this.renderListItem1.bind(this);
        this._list1.setVirtual();
        this._list1.numItems = 1;
        this._list1.on(fgui.Event.PULL_DOWN_RELEASE, this.onPullDownToRefresh, this);
        this._list2 = this._view.getChild("list2").asList;
        this._list2.itemRenderer = this.renderListItem2.bind(this);
        this._list2.setVirtual();
        this._list2.numItems = 1;
        this._list2.on(fgui.Event.PULL_UP_RELEASE, this.onPullUpToRefresh, this);
      };
      PullToRefreshDemo.prototype.renderListItem1 = function(index, item) {
        item.text = "Item " + (this._list1.numItems - index - 1);
      };
      PullToRefreshDemo.prototype.renderListItem2 = function(index, item) {
        item.text = "Item " + index;
      };
      PullToRefreshDemo.prototype.onPullDownToRefresh = function() {
        var header = this._list1.scrollPane.header;
        if (header.readyToRefresh) {
          header.setRefreshStatus(2);
          this._list1.scrollPane.lockHeader(header.sourceHeight);
          this.scheduleOnce(this.simulateAsynWorkFinished, 2);
        }
      };
      PullToRefreshDemo.prototype.onPullUpToRefresh = function() {
        var footer = this._list2.scrollPane.footer.asCom;
        footer.getController("c1").selectedIndex = 1;
        this._list2.scrollPane.lockFooter(footer.sourceHeight);
        this.scheduleOnce(this.simulateAsynWorkFinished2, 2);
      };
      PullToRefreshDemo.prototype.simulateAsynWorkFinished = function() {
        this._list1.numItems += 5;
        var header = this._list1.scrollPane.header;
        header.setRefreshStatus(3);
        this._list1.scrollPane.lockHeader(35);
        this.scheduleOnce(this.simulateHintFinished, 2);
      };
      PullToRefreshDemo.prototype.simulateHintFinished = function() {
        var header = this._list1.scrollPane.header;
        header.setRefreshStatus(0);
        this._list1.scrollPane.lockHeader(0);
      };
      PullToRefreshDemo.prototype.simulateAsynWorkFinished2 = function() {
        this._list2.numItems += 5;
        var footer = this._list2.scrollPane.footer.asCom;
        footer.getController("c1").selectedIndex = 0;
        this._list2.scrollPane.lockFooter(0);
      };
      PullToRefreshDemo = __decorate([ ccclass ], PullToRefreshDemo);
      return PullToRefreshDemo;
    }(cc.Component);
    exports.default = PullToRefreshDemo;
    cc._RF.pop();
  }, {
    "./ScrollPaneHeader": "ScrollPaneHeader"
  } ],
  Runable: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ea369XlZapOC6YxeMVXx+B4", "Runable");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Runable = function(_super) {
      __extends(Runable, _super);
      function Runable() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      Runable_1 = Runable;
      Runable.Attach = function(node, call) {
        if (node["$runable"]) {
          node["$runable"].lateUpdate = call;
          return;
        }
        var r = node["$runable"] = node.addComponent(Runable_1);
        r.lateUpdate = call;
      };
      Runable.prototype.lateUpdate = function() {};
      var Runable_1;
      Runable = Runable_1 = __decorate([ ccclass ], Runable);
      return Runable;
    }(cc.Component);
    exports.default = Runable;
    cc._RF.pop();
  }, {} ],
  SbCom: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "94698VwGSdJ/Kpl/ui7P+xh", "SbCom");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var FaryguiListEx_1 = require("../Lib/FaryguiListEx");
    var FaryguiUtil_1 = require("../Lib/FaryguiUtil");
    var GListEx_1 = require("../Lib/GListEx");
    var log = console.log;
    var SbCom = function() {
      function SbCom(com) {
        var _this = this;
        this.data = null;
        var mapObjs = FaryguiUtil_1.default.createMapPaths(com);
        var listView = mapObjs.getChild("ListView");
        var tgAuto = mapObjs.getChild("tgAuto");
        var data = [];
        var items = [];
        for (var iF = 0; iF < 100; iF++) {
          var matches = [];
          var lMatch = 0 == iF ? 2 : Math.round(50 + 50 * Math.random());
          for (var iM = 0; iM < lMatch; iM++) {
            var type = 0;
            var info = itemInfo[type];
            matches.push({
              name: "F" + iF + " M" + iM,
              type: type,
              url: info[0],
              height: info[1],
              strData: randomTextSpecial(Math.floor(10 + 10 * Math.random()))
            });
          }
          data.push({
            idx: iF,
            isExpand: true,
            matches: matches,
            ref: null
          });
        }
        FaryguiListEx_1.ListRendererEx(listView, function(index, item) {
          var itemCtrl = item["$itemCtrl"];
          if (!itemCtrl) {
            itemCtrl = new ItemCtrl(listView, item, data[index]);
            item["$itemCtrl"] = itemCtrl;
            items.push(itemCtrl);
          }
          itemCtrl.refresh(data[index]);
          log("Obj render match");
        });
        this.data = data;
        listView.numItems = data.length;
        com._partner.schedule(function() {
          tgAuto.selected && _this.randomData();
        }, .2, cc.macro.REPEAT_FOREVER);
      }
      SbCom.prototype.randomData = function() {
        var data = this.data;
        for (var idx = 0; idx < data.length; idx++) {
          var l = data[idx];
          if (!l.isExpand) continue;
          l.matches.forEach(function(m) {
            m.strData = randomTextSpecial(Math.floor(10 + 10 * Math.random()));
            m.doRefreshUi && m.doRefreshUi();
            m.doRanShowUi && m.doRanShowUi();
          });
        }
      };
      return SbCom;
    }();
    exports.SbCom = SbCom;
    function randomTextSpecial(length) {
      var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
      var result = "";
      for (var i = 0; i < length; i++) result += chars.charAt(Math.floor(Math.random() * chars.length));
      return result;
    }
    var itemInfo = [ [ "ui://rb6r5pqoesa1b", 300 ], [ "ui://rb6r5pqoesa118", 400 ], [ "ui://rb6r5pqoesa11b", 600 ] ];
    function getDateStr(time) {
      var sd = getDate(time);
      return sd.year + "-" + sd.month + "-" + sd.day + " " + sd.hour + ":" + sd.minute + ":" + sd.second + "." + sd.millisecond;
    }
    function getDate(time) {
      var d = time > 0 ? new Date(time) : new Date();
      var day = d.getDate() < 10 ? "0" + d.getDate() : d.getDate(), month = d.getMonth() < 9 ? "0" + (d.getMonth() + 1) : d.getMonth() + 1, year = d.getFullYear(), hour = d.getHours() < 10 ? "0" + d.getHours() : d.getHours(), minute = d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes(), second = d.getSeconds() < 10 ? "0" + d.getSeconds() : d.getSeconds();
      var m = d.getMilliseconds();
      var millisecond = m < 10 ? "0" + m : m.toString();
      m < 100 && (millisecond = "0" + m);
      return {
        time: +d,
        year: year,
        month: month,
        day: day,
        hour: hour,
        minute: minute,
        second: second,
        millisecond: millisecond
      };
    }
    var ItemCtrl = function() {
      function ItemCtrl(list, item, data) {
        this.isMoving = false;
        this.isInitList = false;
        this.countRefresh = 0;
        this.offsetContentBot = 30;
        this.data = data;
        this.list = list;
        this.item = item;
        this.lb = item.getChild("lb");
        this.lb2 = item.getChild("lb2");
        this.lb3 = item.getChild("lb3");
        this.content = item.getChild("content");
        this.list_content = this.content.getChild("list_content");
        var btDrop = item.getChild("btDrop");
        this.btDropClose = btDrop.getChild("close");
        this.btDropOpen = btDrop.getChild("open");
        this.hBase = item.height;
        this.content.height = 0;
        this.content.visible = false;
        btDrop.onClick(this.onclick, this);
        this.initList();
      }
      ItemCtrl.prototype.initList = function() {
        var self = this;
        if (self.isInitList) return;
        self.isInitList = true;
        var itemRenderer = function(index, item) {
          var idxMatch = index;
          var math = self.data.matches[idxMatch];
          if (item["@data"] === math) return;
          if (item["@data"]) {
            item["@data"].doRefreshUi = void 0;
            item["@data"].doRanShowUi = void 0;
          }
          log("Obj render cell", math.name);
          item["@data"] = math;
          var btEx = item.getChild("btEx");
          btEx && FaryguiUtil_1.default.setClick(btEx, function() {
            var idxMatch = self.data.matches.indexOf(math);
            self.onBtExClick(idxMatch);
          });
          var btAdd = item.getChild("btAdd");
          btAdd && FaryguiUtil_1.default.setClick(btAdd, function() {
            var idxMatch = self.data.matches.indexOf(math);
            self.onBtAddClick(idxMatch);
          });
          var btRemove = item.getChild("btRemove");
          btRemove && FaryguiUtil_1.default.setClick(btRemove, function() {
            var idxMatch = self.data.matches.indexOf(math);
            self.onBtRemoveClick(idxMatch);
          });
          var lb = item.getChild("lb");
          var lbSub = item.getChild("lbSub");
          var lbSub2 = item.getChild("lbSub2");
          var lbSub3 = item.getChild("lbSub3");
          var lbSub4 = item.getChild("lbSub4");
          math.doRefreshUi = function() {
            lb && (lb.text = math.name);
            lbSub && (lbSub.text = "Type cell is " + math.type);
            lbSub2 && (lbSub2.text = "Height cell is " + math.height);
            math.strData && lbSub3 && (lbSub3.text = math.strData);
            lbSub4 && (lbSub4.text = getDateStr(Date.now()));
          };
          math.doRanShowUi = function() {
            for (var idx = 0; idx < item._children.length; idx++) {
              var c = item._children[idx];
              "n" == c.name[0] && (c.visible = Math.random() > .8);
            }
          };
          math.doRefreshUi();
        };
        this.list_content.itemRenderer = itemRenderer;
        return;
      };
      ItemCtrl.prototype.onBtExClick = function(idxMatch) {
        log("onBtExClick", idxMatch);
        var match = this.data.matches[idxMatch];
        var type = ++match.type % itemInfo.length;
        var info = itemInfo[type];
        match.type = type;
        match.url = info[0];
        match.height = info[1];
        this.refresh(this.data);
      };
      ItemCtrl.prototype.onBtAddClick = function(idxMatch) {
        log("onBtAddClick", idxMatch);
        var matches = this.data.matches;
        var m = matches[idxMatch];
        var c = matches.splice(idxMatch, matches.length - idxMatch);
        matches.push({
          name: m.name,
          type: m.type,
          url: m.url,
          height: m.height,
          strData: m.strData
        });
        c.length > 0 && matches.push.apply(matches, c);
        GListEx_1.GListEx.addItemByUrl(this.list_content, idxMatch);
        this.refresh(this.data);
      };
      ItemCtrl.prototype.onBtRemoveClick = function(idxMatch) {
        log("onBtRemoveClick", idxMatch);
        this.data.matches.splice(idxMatch, 1);
        GListEx_1.GListEx.removeItemEx(this.list_content, idxMatch);
        this.refresh(this.data);
      };
      ItemCtrl.prototype.refresh = function(data) {
        var _this = this;
        this.countRefresh++;
        this.lb2 && (this.lb2.text = "Refresh: " + this.countRefresh);
        this.lb3 && (this.lb3.text = "Count cells: " + data.matches.length);
        data.ref = this;
        this.data = data;
        this.lb && (this.lb.text = "Idx " + data.idx);
        this.content.visible = true;
        this.btDropClose.visible = !data.isExpand;
        this.btDropOpen.visible = data.isExpand;
        FaryguiUtil_1.default.kill(this.content);
        if (!data.isExpand) {
          FaryguiUtil_1.default.toHeightByD(this.item, this.hBase, 1.2).onUpdate(this.doSpan, this).onComplete(function() {
            _this.item.height = _this.hBase;
            _this.doSpan();
            _this.content.height = 0;
            _this.content.visible = false;
          }, this);
          return;
        }
        if (!this.item.node.activeInHierarchy) {
          log("skip list");
          return;
        }
        var self = this;
        GListEx_1.GListFast.fastUpdateHeight(this.list_content, data.matches.length, function(index) {
          return self.data.matches[index];
        });
        var contentHeight = this.list_content.scrollPane.contentHeight;
        this.list_content.scrollPane.viewHeight = contentHeight;
        var hContent = contentHeight;
        var hTo = this.hBase + this.list_content.y + hContent + this.offsetContentBot;
        if (this.countRefresh <= 1) {
          this.item.height = hTo;
          this.doSpan();
          return;
        }
        FaryguiUtil_1.default.toHeightByD(this.item, hTo, 1).onUpdate(this.doSpan, this).onComplete(function() {
          _this.item.height = hTo;
          _this.doSpan();
        }, this);
      };
      ItemCtrl.prototype.doSpan = function() {
        var h = this.item.height - this.hBase - this.offsetContentBot;
        h <= 0 && (h = 0);
        this.content.height = h;
      };
      ItemCtrl.prototype.onclick = function() {
        if (!this.data) return;
        this.data.isExpand = !this.data.isExpand;
        this.refresh(this.data);
      };
      return ItemCtrl;
    }();
    cc._RF.pop();
  }, {
    "../Lib/FaryguiListEx": "FaryguiListEx",
    "../Lib/FaryguiUtil": "FaryguiUtil",
    "../Lib/GListEx": "GListEx"
  } ],
  SbLoader: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "04cdfVZ3i9F1akgpZUyTr01", "SbLoader");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var FaryguiInput_1 = require("../Lib/FaryguiInput");
    var SbCom_1 = require("./SbCom");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var SbLoader = function(_super) {
      __extends(SbLoader, _super);
      function SbLoader() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      SbLoader.prototype.onLoad = function() {
        var _this = this;
        FaryguiInput_1.LoadPackage("Farygui/Sb", function(error) {
          if (error) return;
          console.log("Farygui LoadPackage success");
          _this.initUI();
        });
      };
      SbLoader.prototype.initUI = function() {
        var rootCom = new FaryguiInput_1.FaryguiInput(this.node);
        var com = fgui.UIPackage.createObject("Sb", "Main");
        rootCom.addChild(com);
        var comCtrl = new SbCom_1.SbCom(com);
      };
      SbLoader = __decorate([ ccclass ], SbLoader);
      return SbLoader;
    }(cc.Component);
    exports.default = SbLoader;
    cc._RF.pop();
  }, {
    "../Lib/FaryguiInput": "FaryguiInput",
    "./SbCom": "SbCom"
  } ],
  ScrollPaneDemo: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "93cd6XdG39NhbZtOWEPD4Zp", "ScrollPaneDemo");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ScrollPaneDemo = function(_super) {
      __extends(ScrollPaneDemo, _super);
      function ScrollPaneDemo() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      ScrollPaneDemo.prototype.onLoad = function() {
        fgui.UIPackage.loadPackage("UI/ScrollPane", this.onUILoaded.bind(this));
      };
      ScrollPaneDemo.prototype.onUILoaded = function() {
        this._view = fgui.UIPackage.createObject("ScrollPane", "Main").asCom;
        this._view.makeFullScreen();
        fgui.GRoot.inst.addChild(this._view);
        this._list = this._view.getChild("list").asList;
        this._list.itemRenderer = this.renderListItem.bind(this);
        this._list.setVirtual();
        this._list.numItems = 1e3;
        this._list.on(fgui.Event.TOUCH_BEGIN, this.onClickList, this);
      };
      ScrollPaneDemo.prototype.renderListItem = function(index, item) {
        item.title = "Item " + index;
        item.scrollPane.posX = 0;
        item.getChild("b0").onClick(this.onClickStick, this);
        item.getChild("b1").onClick(this.onClickDelete, this);
      };
      ScrollPaneDemo.prototype.onClickList = function(evt) {
        var cnt = this._list.numChildren;
        for (var i = 0; i < cnt; i++) {
          var item = this._list.getChildAt(i).asButton;
          if (0 != item.scrollPane.posX) {
            if (item.getChild("b0").asButton.isAncestorOf(fgui.GRoot.inst.touchTarget) || item.getChild("b1").asButton.isAncestorOf(fgui.GRoot.inst.touchTarget)) return;
            item.scrollPane.setPosX(0, true);
            item.scrollPane.cancelDragging();
            this._list.scrollPane.cancelDragging();
            break;
          }
        }
      };
      ScrollPaneDemo.prototype.onClickStick = function(evt) {
        this._view.getChild("txt").text = "Stick " + fgui.GObject.cast(evt.currentTarget).parent.text;
      };
      ScrollPaneDemo.prototype.onClickDelete = function(evt) {
        this._view.getChild("txt").text = "Delete " + fgui.GObject.cast(evt.currentTarget).parent.text;
      };
      ScrollPaneDemo = __decorate([ ccclass ], ScrollPaneDemo);
      return ScrollPaneDemo;
    }(cc.Component);
    exports.default = ScrollPaneDemo;
    cc._RF.pop();
  }, {} ],
  ScrollPaneHeader: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "89f97GVJ1BEZ4QRZYdkQ5vf", "ScrollPaneHeader");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ScrollPaneHeader = function(_super) {
      __extends(ScrollPaneHeader, _super);
      function ScrollPaneHeader() {
        return _super.call(this) || this;
      }
      ScrollPaneHeader.prototype.onConstruct = function() {
        this._c1 = this.getController("c1");
        this.on(fgui.Event.SIZE_CHANGED, this.onSizeChanged, this);
      };
      ScrollPaneHeader.prototype.onSizeChanged = function() {
        if (2 == this._c1.selectedIndex || 3 == this._c1.selectedIndex) return;
        this.height > this.sourceHeight ? this._c1.selectedIndex = 1 : this._c1.selectedIndex = 0;
      };
      Object.defineProperty(ScrollPaneHeader.prototype, "readyToRefresh", {
        get: function() {
          return 1 == this._c1.selectedIndex;
        },
        enumerable: true,
        configurable: true
      });
      ScrollPaneHeader.prototype.setRefreshStatus = function(value) {
        this._c1.selectedIndex = value;
      };
      return ScrollPaneHeader;
    }(fgui.GComponent);
    exports.default = ScrollPaneHeader;
    cc._RF.pop();
  }, {} ],
  TestWin: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b454cqve2dF/rIQosVmCH0A", "TestWin");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var TestWin = function(_super) {
      __extends(TestWin, _super);
      function TestWin() {
        return _super.call(this) || this;
      }
      TestWin.prototype.onInit = function() {
        this.contentPane = fgui.UIPackage.createObject("ModalWaiting", "TestWin").asCom;
        this.contentPane.getChild("n1").onClick(this.onClickStart, this);
      };
      TestWin.prototype.onClickStart = function() {
        this.showModalWait();
        fgui.GTween.delayedCall(3).onComplete(function() {
          this.closeModalWait();
        }, this);
      };
      return TestWin;
    }(fgui.Window);
    exports.TestWin = TestWin;
    var WindowA = function(_super) {
      __extends(WindowA, _super);
      function WindowA() {
        return _super.call(this) || this;
      }
      WindowA.prototype.onInit = function() {
        this.contentPane = fgui.UIPackage.createObject("Basics", "WindowA").asCom;
        this.center();
      };
      WindowA.prototype.onShown = function() {
        var list = this.contentPane.getChild("n6").asList;
        list.removeChildrenToPool();
        for (var i = 0; i < 6; i++) {
          var item = list.addItemFromPool().asButton;
          item.title = "" + i;
          item.icon = fgui.UIPackage.getItemURL("Basics", "r4");
        }
      };
      return WindowA;
    }(fgui.Window);
    exports.WindowA = WindowA;
    var WindowB = function(_super) {
      __extends(WindowB, _super);
      function WindowB() {
        return _super.call(this) || this;
      }
      WindowB.prototype.onInit = function() {
        this.contentPane = fgui.UIPackage.createObject("Basics", "WindowB").asCom;
        this.center();
        this.setPivot(.5, .5);
      };
      WindowB.prototype.doShowAnimation = function() {
        this.setScale(.1, .1);
        fgui.GTween.to2(.1, .1, 1, 1, .3).setTarget(this, this.setScale).setEase(fgui.EaseType.QuadOut).onComplete(this.onShown, this);
      };
      WindowB.prototype.doHideAnimation = function() {
        fgui.GTween.to2(1, 1, .1, .1, .3).setTarget(this, this.setScale).setEase(fgui.EaseType.QuadOut).onComplete(this.hideImmediately, this);
      };
      WindowB.prototype.onShown = function() {
        this.contentPane.getTransition("t1").play();
      };
      WindowB.prototype.onHide = function() {
        this.contentPane.getTransition("t1").stop();
      };
      return WindowB;
    }(fgui.Window);
    exports.WindowB = WindowB;
    cc._RF.pop();
  }, {} ],
  TransitionDemo: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "be98dliBOVMbL5H8wk+8uEW", "TransitionDemo");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var TransitionDemo = function(_super) {
      __extends(TransitionDemo, _super);
      function TransitionDemo() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      TransitionDemo.prototype.onLoad = function() {
        fgui.UIPackage.loadPackage("UI/Transition", this.onUILoaded.bind(this));
      };
      TransitionDemo.prototype.onUILoaded = function() {
        this._view = fgui.UIPackage.createObject("Transition", "Main").asCom;
        this._view.makeFullScreen();
        fgui.GRoot.inst.addChild(this._view);
        this._btnGroup = this._view.getChild("g0").asGroup;
        this._g1 = fgui.UIPackage.createObject("Transition", "BOSS").asCom;
        this._g2 = fgui.UIPackage.createObject("Transition", "BOSS_SKILL").asCom;
        this._g3 = fgui.UIPackage.createObject("Transition", "TRAP").asCom;
        this._g4 = fgui.UIPackage.createObject("Transition", "GoodHit").asCom;
        this._g5 = fgui.UIPackage.createObject("Transition", "PowerUp").asCom;
        this._g6 = fgui.UIPackage.createObject("Transition", "PathDemo").asCom;
        this._g5.getTransition("t0").setHook("play_num_now", this.__playNum.bind(this));
        this._view.getChild("btn0").onClick(function() {
          this.__play(this._g1);
        }, this);
        this._view.getChild("btn1").onClick(function() {
          this.__play(this._g2);
        }, this);
        this._view.getChild("btn2").onClick(function() {
          this.__play(this._g3);
        }, this);
        this._view.getChild("btn3").onClick(this.__play4, this);
        this._view.getChild("btn4").onClick(this.__play5, this);
        this._view.getChild("btn5").onClick(function() {
          this.__play(this._g6);
        }, this);
      };
      TransitionDemo.prototype.__play = function(target) {
        var _this = this;
        this._btnGroup.visible = false;
        fgui.GRoot.inst.addChild(target);
        var t = target.getTransition("t0");
        t.play(function() {
          _this._btnGroup.visible = true;
          fgui.GRoot.inst.removeChild(target);
        });
      };
      TransitionDemo.prototype.__play4 = function() {
        var _this = this;
        this._btnGroup.visible = false;
        this._g4.x = fgui.GRoot.inst.width - this._g4.width - 20;
        this._g4.y = 100;
        fgui.GRoot.inst.addChild(this._g4);
        var t = this._g4.getTransition("t0");
        t.play(function() {
          _this._btnGroup.visible = true;
          fgui.GRoot.inst.removeChild(_this._g4);
        }, 3);
      };
      TransitionDemo.prototype.__play5 = function() {
        var _this = this;
        this._btnGroup.visible = false;
        this._g5.x = 20;
        this._g5.y = fgui.GRoot.inst.height - this._g5.height - 100;
        fgui.GRoot.inst.addChild(this._g5);
        var t = this._g5.getTransition("t0");
        this._startValue = 1e4;
        var add = Math.ceil(2e3 * Math.random() + 1e3);
        this._endValue = this._startValue + add;
        this._g5.getChild("value").text = "" + this._startValue;
        this._g5.getChild("add_value").text = "+" + add;
        t.play(function() {
          _this._btnGroup.visible = true;
          fgui.GRoot.inst.removeChild(_this._g5);
        });
      };
      TransitionDemo.prototype.__playNum = function() {
        fgui.GTween.to(this._startValue, this._endValue, .3).setEase(fgui.EaseType.Linear).onUpdate(function(tweener) {
          this._g5.getChild("value").text = "" + Math.floor(tweener.value.x);
        }, this);
      };
      TransitionDemo = __decorate([ ccclass ], TransitionDemo);
      return TransitionDemo;
    }(cc.Component);
    exports.default = TransitionDemo;
    cc._RF.pop();
  }, {} ],
  TreeViewDemo: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d32a53y3a1FRLclDItu1P48", "TreeViewDemo");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var TreeViewDemo = function(_super) {
      __extends(TreeViewDemo, _super);
      function TreeViewDemo() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      TreeViewDemo.prototype.onLoad = function() {
        fgui.UIPackage.loadPackage("UI/TreeView", this.onUILoaded.bind(this));
      };
      TreeViewDemo.prototype.onUILoaded = function() {
        this._view = fgui.UIPackage.createObject("TreeView", "Main").asCom;
        this._view.makeFullScreen();
        fgui.GRoot.inst.addChild(this._view);
        this._fileURL = "ui://TreeView/file";
        this._tree1 = this._view.getChild("tree").asTree;
        this._tree1.on(fgui.Event.CLICK_ITEM, this.__clickNode, this);
        this._tree2 = this._view.getChild("tree2").asTree;
        this._tree2.on(fgui.Event.CLICK_ITEM, this.__clickNode, this);
        this._tree2.treeNodeRender = this.renderTreeNode.bind(this);
        var topNode = new fgui.GTreeNode(true);
        topNode.data = "I'm a top node";
        this._tree2.rootNode.addChild(topNode);
        for (var i = 0; i < 5; i++) {
          var node = new fgui.GTreeNode(false);
          node.data = "Hello " + i;
          topNode.addChild(node);
        }
        var aFolderNode = new fgui.GTreeNode(true);
        aFolderNode.data = "A folder node";
        topNode.addChild(aFolderNode);
        for (var i = 0; i < 5; i++) {
          var node = new fgui.GTreeNode(false);
          node.data = "Good " + i;
          aFolderNode.addChild(node);
        }
        for (var i = 0; i < 3; i++) {
          var node = new fgui.GTreeNode(false);
          node.data = "World " + i;
          topNode.addChild(node);
        }
        var anotherTopNode = new fgui.GTreeNode(false);
        anotherTopNode.data = [ "I'm a top node too", "ui://TreeView/heart" ];
        this._tree2.rootNode.addChild(anotherTopNode);
      };
      TreeViewDemo.prototype.renderTreeNode = function(node, obj) {
        if (node.isFolder) obj.text = node.data; else if (node.data instanceof Array) {
          obj.icon = node.data[1];
          obj.text = node.data[0];
        } else {
          obj.icon = this._fileURL;
          obj.text = node.data;
        }
      };
      TreeViewDemo.prototype.__clickNode = function(itemObject) {
        var node = itemObject.treeNode;
        console.log(node.text);
      };
      TreeViewDemo = __decorate([ ccclass ], TreeViewDemo);
      return TreeViewDemo;
    }(cc.Component);
    exports.default = TreeViewDemo;
    cc._RF.pop();
  }, {} ],
  VirtualListDemo: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "04692svvGVC74+vSan5Z+OL", "VirtualListDemo");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var MailItem_1 = require("./MailItem");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var VirtualListDemo = function(_super) {
      __extends(VirtualListDemo, _super);
      function VirtualListDemo() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      VirtualListDemo.prototype.onLoad = function() {
        fgui.UIPackage.loadPackage("UI/VirtualList", this.onUILoaded.bind(this));
      };
      VirtualListDemo.prototype.onUILoaded = function() {
        fgui.UIObjectFactory.setExtension("ui://VirtualList/mailItem", MailItem_1.default);
        this._view = fgui.UIPackage.createObject("VirtualList", "Main").asCom;
        this._view.makeFullScreen();
        fgui.GRoot.inst.addChild(this._view);
        this._view.getChild("n6").onClick(function() {
          this._list.addSelection(500, true);
        }, this);
        this._view.getChild("n7").onClick(function() {
          this._list.scrollPane.scrollTop();
        }, this);
        this._view.getChild("n8").onClick(function() {
          this._list.scrollPane.scrollBottom();
        }, this);
        this._list = this._view.getChild("mailList").asList;
        this._list.setVirtual();
        this._list.itemRenderer = this.renderListItem.bind(this);
        this._list.numItems = 1e3;
      };
      VirtualListDemo.prototype.renderListItem = function(index, obj) {
        var item = obj;
        item.setFetched(index % 3 == 0);
        item.setRead(index % 2 == 0);
        item.setTime("5 Nov 2015 16:24:33");
        item.title = index + " Mail title here";
      };
      VirtualListDemo = __decorate([ ccclass ], VirtualListDemo);
      return VirtualListDemo;
    }(cc.Component);
    exports.default = VirtualListDemo;
    cc._RF.pop();
  }, {
    "./MailItem": "MailItem"
  } ]
}, {}, [ "BagDemo", "BasicsDemo", "ChatDemo", "CooldownDemo", "DemoEntry", "EmojiParser", "GuideDemo", "HitTestDemo", "JoystickDemo", "JoystickModule", "ListEffectDemo", "LoopListDemo", "MailItem", "MainMenu", "ModalWaitingDemo", "PullToRefreshDemo", "ScrollPaneDemo", "ScrollPaneHeader", "TestWin", "TransitionDemo", "TreeViewDemo", "VirtualListDemo", "FaryguiInput", "FaryguiListEx", "FaryguiUtil", "GListEx", "Runable", "SbCom", "SbLoader", "MaskEx" ]);
//# sourceMappingURL=project.dev.js.map