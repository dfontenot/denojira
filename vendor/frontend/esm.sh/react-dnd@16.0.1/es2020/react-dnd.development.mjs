/* esm.sh - react-dnd@16.0.1 */
// node_modules/react-dnd/dist/core/DndContext.js
import { createContext } from "/react@^19.2.4?target=es2020&dev";
var DndContext = createContext({
  dragDropManager: void 0
});

// node_modules/react-dnd/dist/core/DndProvider.js
import { jsx as _jsx } from "/react@^19.2.4/jsx-runtime?target=es2020&dev";
import { createDragDropManager } from "/dnd-core@^16.0.1?target=es2020&dev";
import { memo, useEffect } from "/react@^19.2.4?target=es2020&dev";
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
var refCount = 0;
var INSTANCE_SYM = /* @__PURE__ */ Symbol.for("__REACT_DND_CONTEXT_INSTANCE__");
var DndProvider = /* @__PURE__ */ memo(function DndProvider2(_param) {
  var { children } = _param, props = _objectWithoutProperties(_param, [
    "children"
  ]);
  const [manager, isGlobalInstance] = getDndContextValue(props);
  useEffect(() => {
    if (isGlobalInstance) {
      const context = getGlobalContext();
      ++refCount;
      return () => {
        if (--refCount === 0) {
          context[INSTANCE_SYM] = null;
        }
      };
    }
    return;
  }, []);
  return /* @__PURE__ */ _jsx(DndContext.Provider, {
    value: manager,
    children
  });
});
function getDndContextValue(props) {
  if ("manager" in props) {
    const manager2 = {
      dragDropManager: props.manager
    };
    return [
      manager2,
      false
    ];
  }
  const manager = createSingletonDndContext(props.backend, props.context, props.options, props.debugMode);
  const isGlobalInstance = !props.context;
  return [
    manager,
    isGlobalInstance
  ];
}
function createSingletonDndContext(backend, context = getGlobalContext(), options, debugMode) {
  const ctx = context;
  if (!ctx[INSTANCE_SYM]) {
    ctx[INSTANCE_SYM] = {
      dragDropManager: createDragDropManager(backend, context, options, debugMode)
    };
  }
  return ctx[INSTANCE_SYM];
}
function getGlobalContext() {
  return typeof globalThis !== "undefined" ? globalThis : window;
}

// node_modules/react-dnd/dist/core/DragPreviewImage.js
import { memo as memo2, useEffect as useEffect2 } from "/react@^19.2.4?target=es2020&dev";
var DragPreviewImage = memo2(function DragPreviewImage2({ connect, src }) {
  useEffect2(() => {
    if (typeof Image === "undefined") return;
    let connected = false;
    const img = new Image();
    img.src = src;
    img.onload = () => {
      connect(img);
      connected = true;
    };
    return () => {
      if (connected) {
        connect(null);
      }
    };
  });
  return null;
});

// node_modules/react-dnd/dist/hooks/useDrag/useDrag.js
import { invariant as invariant6 } from "/@react-dnd/invariant@^4.0.1?target=es2020&dev";

// node_modules/react-dnd/dist/hooks/useCollector.js
import equal from "/fast-deep-equal@^3.1.3?target=es2020&dev";
import { useCallback, useState } from "/react@^19.2.4?target=es2020&dev";

// node_modules/react-dnd/dist/hooks/useIsomorphicLayoutEffect.js
import { useEffect as useEffect3, useLayoutEffect } from "/react@^19.2.4?target=es2020&dev";
var useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect3;

// node_modules/react-dnd/dist/hooks/useCollector.js
function useCollector(monitor, collect, onUpdate) {
  const [collected, setCollected] = useState(
    () => collect(monitor)
  );
  const updateCollected = useCallback(() => {
    const nextValue = collect(monitor);
    if (!equal(collected, nextValue)) {
      setCollected(nextValue);
      if (onUpdate) {
        onUpdate();
      }
    }
  }, [
    collected,
    monitor,
    onUpdate
  ]);
  useIsomorphicLayoutEffect(updateCollected);
  return [
    collected,
    updateCollected
  ];
}

// node_modules/react-dnd/dist/hooks/useMonitorOutput.js
function useMonitorOutput(monitor, collect, onCollect) {
  const [collected, updateCollected] = useCollector(monitor, collect, onCollect);
  useIsomorphicLayoutEffect(function subscribeToMonitorStateChange() {
    const handlerId = monitor.getHandlerId();
    if (handlerId == null) {
      return;
    }
    return monitor.subscribeToStateChange(updateCollected, {
      handlerIds: [
        handlerId
      ]
    });
  }, [
    monitor,
    updateCollected
  ]);
  return collected;
}

// node_modules/react-dnd/dist/hooks/useCollectedProps.js
function useCollectedProps(collector, monitor, connector) {
  return useMonitorOutput(
    monitor,
    collector || (() => ({})),
    () => connector.reconnect()
  );
}

// node_modules/react-dnd/dist/hooks/useOptionalFactory.js
import { useMemo } from "/react@^19.2.4?target=es2020&dev";
function useOptionalFactory(arg, deps) {
  const memoDeps = [
    ...deps || []
  ];
  if (deps == null && typeof arg !== "function") {
    memoDeps.push(arg);
  }
  return useMemo(() => {
    return typeof arg === "function" ? arg() : arg;
  }, memoDeps);
}

// node_modules/react-dnd/dist/hooks/useDrag/connectors.js
import { useMemo as useMemo2 } from "/react@^19.2.4?target=es2020&dev";
function useConnectDragSource(connector) {
  return useMemo2(
    () => connector.hooks.dragSource(),
    [
      connector
    ]
  );
}
function useConnectDragPreview(connector) {
  return useMemo2(
    () => connector.hooks.dragPreview(),
    [
      connector
    ]
  );
}

// node_modules/react-dnd/dist/hooks/useDrag/useDragSourceConnector.js
import { useMemo as useMemo3 } from "/react@^19.2.4?target=es2020&dev";

// node_modules/react-dnd/dist/internals/DragSourceMonitorImpl.js
import { invariant } from "/@react-dnd/invariant@^4.0.1?target=es2020&dev";
var isCallingCanDrag = false;
var isCallingIsDragging = false;
var DragSourceMonitorImpl = class {
  receiveHandlerId(sourceId) {
    this.sourceId = sourceId;
  }
  getHandlerId() {
    return this.sourceId;
  }
  canDrag() {
    invariant(!isCallingCanDrag, "You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
    try {
      isCallingCanDrag = true;
      return this.internalMonitor.canDragSource(this.sourceId);
    } finally {
      isCallingCanDrag = false;
    }
  }
  isDragging() {
    if (!this.sourceId) {
      return false;
    }
    invariant(!isCallingIsDragging, "You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
    try {
      isCallingIsDragging = true;
      return this.internalMonitor.isDraggingSource(this.sourceId);
    } finally {
      isCallingIsDragging = false;
    }
  }
  subscribeToStateChange(listener, options) {
    return this.internalMonitor.subscribeToStateChange(listener, options);
  }
  isDraggingSource(sourceId) {
    return this.internalMonitor.isDraggingSource(sourceId);
  }
  isOverTarget(targetId, options) {
    return this.internalMonitor.isOverTarget(targetId, options);
  }
  getTargetIds() {
    return this.internalMonitor.getTargetIds();
  }
  isSourcePublic() {
    return this.internalMonitor.isSourcePublic();
  }
  getSourceId() {
    return this.internalMonitor.getSourceId();
  }
  subscribeToOffsetChange(listener) {
    return this.internalMonitor.subscribeToOffsetChange(listener);
  }
  canDragSource(sourceId) {
    return this.internalMonitor.canDragSource(sourceId);
  }
  canDropOnTarget(targetId) {
    return this.internalMonitor.canDropOnTarget(targetId);
  }
  getItemType() {
    return this.internalMonitor.getItemType();
  }
  getItem() {
    return this.internalMonitor.getItem();
  }
  getDropResult() {
    return this.internalMonitor.getDropResult();
  }
  didDrop() {
    return this.internalMonitor.didDrop();
  }
  getInitialClientOffset() {
    return this.internalMonitor.getInitialClientOffset();
  }
  getInitialSourceClientOffset() {
    return this.internalMonitor.getInitialSourceClientOffset();
  }
  getSourceClientOffset() {
    return this.internalMonitor.getSourceClientOffset();
  }
  getClientOffset() {
    return this.internalMonitor.getClientOffset();
  }
  getDifferenceFromInitialOffset() {
    return this.internalMonitor.getDifferenceFromInitialOffset();
  }
  constructor(manager) {
    this.sourceId = null;
    this.internalMonitor = manager.getMonitor();
  }
};

// node_modules/react-dnd/dist/internals/DropTargetMonitorImpl.js
import { invariant as invariant2 } from "/@react-dnd/invariant@^4.0.1?target=es2020&dev";
var isCallingCanDrop = false;
var DropTargetMonitorImpl = class {
  receiveHandlerId(targetId) {
    this.targetId = targetId;
  }
  getHandlerId() {
    return this.targetId;
  }
  subscribeToStateChange(listener, options) {
    return this.internalMonitor.subscribeToStateChange(listener, options);
  }
  canDrop() {
    if (!this.targetId) {
      return false;
    }
    invariant2(!isCallingCanDrop, "You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor");
    try {
      isCallingCanDrop = true;
      return this.internalMonitor.canDropOnTarget(this.targetId);
    } finally {
      isCallingCanDrop = false;
    }
  }
  isOver(options) {
    if (!this.targetId) {
      return false;
    }
    return this.internalMonitor.isOverTarget(this.targetId, options);
  }
  getItemType() {
    return this.internalMonitor.getItemType();
  }
  getItem() {
    return this.internalMonitor.getItem();
  }
  getDropResult() {
    return this.internalMonitor.getDropResult();
  }
  didDrop() {
    return this.internalMonitor.didDrop();
  }
  getInitialClientOffset() {
    return this.internalMonitor.getInitialClientOffset();
  }
  getInitialSourceClientOffset() {
    return this.internalMonitor.getInitialSourceClientOffset();
  }
  getSourceClientOffset() {
    return this.internalMonitor.getSourceClientOffset();
  }
  getClientOffset() {
    return this.internalMonitor.getClientOffset();
  }
  getDifferenceFromInitialOffset() {
    return this.internalMonitor.getDifferenceFromInitialOffset();
  }
  constructor(manager) {
    this.targetId = null;
    this.internalMonitor = manager.getMonitor();
  }
};

// node_modules/react-dnd/dist/internals/registration.js
function registerTarget(type, target, manager) {
  const registry = manager.getRegistry();
  const targetId = registry.addTarget(type, target);
  return [
    targetId,
    () => registry.removeTarget(targetId)
  ];
}
function registerSource(type, source, manager) {
  const registry = manager.getRegistry();
  const sourceId = registry.addSource(type, source);
  return [
    sourceId,
    () => registry.removeSource(sourceId)
  ];
}

// node_modules/react-dnd/dist/internals/SourceConnector.js
import { shallowEqual } from "/@react-dnd/shallowequal@^4.0.1?target=es2020&dev";

// node_modules/react-dnd/dist/internals/isRef.js
function isRef(obj) {
  return (
    // eslint-disable-next-line no-prototype-builtins
    obj !== null && typeof obj === "object" && Object.prototype.hasOwnProperty.call(obj, "current")
  );
}

// node_modules/react-dnd/dist/internals/wrapConnectorHooks.js
import { invariant as invariant3 } from "/@react-dnd/invariant@^4.0.1?target=es2020&dev";
import { cloneElement, isValidElement } from "/react@^19.2.4?target=es2020&dev";
function throwIfCompositeComponentElement(element) {
  if (typeof element.type === "string") {
    return;
  }
  const displayName = element.type.displayName || element.type.name || "the component";
  throw new Error(`Only native element nodes can now be passed to React DnD connectors.You can either wrap ${displayName} into a <div>, or turn it into a drag source or a drop target itself.`);
}
function wrapHookToRecognizeElement(hook) {
  return (elementOrNode = null, options = null) => {
    if (!isValidElement(elementOrNode)) {
      const node = elementOrNode;
      hook(node, options);
      return node;
    }
    const element = elementOrNode;
    throwIfCompositeComponentElement(element);
    const ref = options ? (node) => hook(node, options) : hook;
    return cloneWithRef(element, ref);
  };
}
function wrapConnectorHooks(hooks) {
  const wrappedHooks = {};
  Object.keys(hooks).forEach((key) => {
    const hook = hooks[key];
    if (key.endsWith("Ref")) {
      wrappedHooks[key] = hooks[key];
    } else {
      const wrappedHook = wrapHookToRecognizeElement(hook);
      wrappedHooks[key] = () => wrappedHook;
    }
  });
  return wrappedHooks;
}
function setRef(ref, node) {
  if (typeof ref === "function") {
    ref(node);
  } else {
    ref.current = node;
  }
}
function cloneWithRef(element, newRef) {
  const previousRef = element.ref;
  invariant3(typeof previousRef !== "string", "Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs");
  if (!previousRef) {
    return cloneElement(element, {
      ref: newRef
    });
  } else {
    return cloneElement(element, {
      ref: (node) => {
        setRef(previousRef, node);
        setRef(newRef, node);
      }
    });
  }
}

// node_modules/react-dnd/dist/internals/SourceConnector.js
var SourceConnector = class {
  receiveHandlerId(newHandlerId) {
    if (this.handlerId === newHandlerId) {
      return;
    }
    this.handlerId = newHandlerId;
    this.reconnect();
  }
  get connectTarget() {
    return this.dragSource;
  }
  get dragSourceOptions() {
    return this.dragSourceOptionsInternal;
  }
  set dragSourceOptions(options) {
    this.dragSourceOptionsInternal = options;
  }
  get dragPreviewOptions() {
    return this.dragPreviewOptionsInternal;
  }
  set dragPreviewOptions(options) {
    this.dragPreviewOptionsInternal = options;
  }
  reconnect() {
    const didChange = this.reconnectDragSource();
    this.reconnectDragPreview(didChange);
  }
  reconnectDragSource() {
    const dragSource = this.dragSource;
    const didChange = this.didHandlerIdChange() || this.didConnectedDragSourceChange() || this.didDragSourceOptionsChange();
    if (didChange) {
      this.disconnectDragSource();
    }
    if (!this.handlerId) {
      return didChange;
    }
    if (!dragSource) {
      this.lastConnectedDragSource = dragSource;
      return didChange;
    }
    if (didChange) {
      this.lastConnectedHandlerId = this.handlerId;
      this.lastConnectedDragSource = dragSource;
      this.lastConnectedDragSourceOptions = this.dragSourceOptions;
      this.dragSourceUnsubscribe = this.backend.connectDragSource(this.handlerId, dragSource, this.dragSourceOptions);
    }
    return didChange;
  }
  reconnectDragPreview(forceDidChange = false) {
    const dragPreview = this.dragPreview;
    const didChange = forceDidChange || this.didHandlerIdChange() || this.didConnectedDragPreviewChange() || this.didDragPreviewOptionsChange();
    if (didChange) {
      this.disconnectDragPreview();
    }
    if (!this.handlerId) {
      return;
    }
    if (!dragPreview) {
      this.lastConnectedDragPreview = dragPreview;
      return;
    }
    if (didChange) {
      this.lastConnectedHandlerId = this.handlerId;
      this.lastConnectedDragPreview = dragPreview;
      this.lastConnectedDragPreviewOptions = this.dragPreviewOptions;
      this.dragPreviewUnsubscribe = this.backend.connectDragPreview(this.handlerId, dragPreview, this.dragPreviewOptions);
    }
  }
  didHandlerIdChange() {
    return this.lastConnectedHandlerId !== this.handlerId;
  }
  didConnectedDragSourceChange() {
    return this.lastConnectedDragSource !== this.dragSource;
  }
  didConnectedDragPreviewChange() {
    return this.lastConnectedDragPreview !== this.dragPreview;
  }
  didDragSourceOptionsChange() {
    return !shallowEqual(this.lastConnectedDragSourceOptions, this.dragSourceOptions);
  }
  didDragPreviewOptionsChange() {
    return !shallowEqual(this.lastConnectedDragPreviewOptions, this.dragPreviewOptions);
  }
  disconnectDragSource() {
    if (this.dragSourceUnsubscribe) {
      this.dragSourceUnsubscribe();
      this.dragSourceUnsubscribe = void 0;
    }
  }
  disconnectDragPreview() {
    if (this.dragPreviewUnsubscribe) {
      this.dragPreviewUnsubscribe();
      this.dragPreviewUnsubscribe = void 0;
      this.dragPreviewNode = null;
      this.dragPreviewRef = null;
    }
  }
  get dragSource() {
    return this.dragSourceNode || this.dragSourceRef && this.dragSourceRef.current;
  }
  get dragPreview() {
    return this.dragPreviewNode || this.dragPreviewRef && this.dragPreviewRef.current;
  }
  clearDragSource() {
    this.dragSourceNode = null;
    this.dragSourceRef = null;
  }
  clearDragPreview() {
    this.dragPreviewNode = null;
    this.dragPreviewRef = null;
  }
  constructor(backend) {
    this.hooks = wrapConnectorHooks({
      dragSource: (node, options) => {
        this.clearDragSource();
        this.dragSourceOptions = options || null;
        if (isRef(node)) {
          this.dragSourceRef = node;
        } else {
          this.dragSourceNode = node;
        }
        this.reconnectDragSource();
      },
      dragPreview: (node, options) => {
        this.clearDragPreview();
        this.dragPreviewOptions = options || null;
        if (isRef(node)) {
          this.dragPreviewRef = node;
        } else {
          this.dragPreviewNode = node;
        }
        this.reconnectDragPreview();
      }
    });
    this.handlerId = null;
    this.dragSourceRef = null;
    this.dragSourceOptionsInternal = null;
    this.dragPreviewRef = null;
    this.dragPreviewOptionsInternal = null;
    this.lastConnectedHandlerId = null;
    this.lastConnectedDragSource = null;
    this.lastConnectedDragSourceOptions = null;
    this.lastConnectedDragPreview = null;
    this.lastConnectedDragPreviewOptions = null;
    this.backend = backend;
  }
};

// node_modules/react-dnd/dist/internals/TargetConnector.js
import { shallowEqual as shallowEqual2 } from "/@react-dnd/shallowequal@^4.0.1?target=es2020&dev";
var TargetConnector = class {
  get connectTarget() {
    return this.dropTarget;
  }
  reconnect() {
    const didChange = this.didHandlerIdChange() || this.didDropTargetChange() || this.didOptionsChange();
    if (didChange) {
      this.disconnectDropTarget();
    }
    const dropTarget = this.dropTarget;
    if (!this.handlerId) {
      return;
    }
    if (!dropTarget) {
      this.lastConnectedDropTarget = dropTarget;
      return;
    }
    if (didChange) {
      this.lastConnectedHandlerId = this.handlerId;
      this.lastConnectedDropTarget = dropTarget;
      this.lastConnectedDropTargetOptions = this.dropTargetOptions;
      this.unsubscribeDropTarget = this.backend.connectDropTarget(this.handlerId, dropTarget, this.dropTargetOptions);
    }
  }
  receiveHandlerId(newHandlerId) {
    if (newHandlerId === this.handlerId) {
      return;
    }
    this.handlerId = newHandlerId;
    this.reconnect();
  }
  get dropTargetOptions() {
    return this.dropTargetOptionsInternal;
  }
  set dropTargetOptions(options) {
    this.dropTargetOptionsInternal = options;
  }
  didHandlerIdChange() {
    return this.lastConnectedHandlerId !== this.handlerId;
  }
  didDropTargetChange() {
    return this.lastConnectedDropTarget !== this.dropTarget;
  }
  didOptionsChange() {
    return !shallowEqual2(this.lastConnectedDropTargetOptions, this.dropTargetOptions);
  }
  disconnectDropTarget() {
    if (this.unsubscribeDropTarget) {
      this.unsubscribeDropTarget();
      this.unsubscribeDropTarget = void 0;
    }
  }
  get dropTarget() {
    return this.dropTargetNode || this.dropTargetRef && this.dropTargetRef.current;
  }
  clearDropTarget() {
    this.dropTargetRef = null;
    this.dropTargetNode = null;
  }
  constructor(backend) {
    this.hooks = wrapConnectorHooks({
      dropTarget: (node, options) => {
        this.clearDropTarget();
        this.dropTargetOptions = options;
        if (isRef(node)) {
          this.dropTargetRef = node;
        } else {
          this.dropTargetNode = node;
        }
        this.reconnect();
      }
    });
    this.handlerId = null;
    this.dropTargetRef = null;
    this.dropTargetOptionsInternal = null;
    this.lastConnectedHandlerId = null;
    this.lastConnectedDropTarget = null;
    this.lastConnectedDropTargetOptions = null;
    this.backend = backend;
  }
};

// node_modules/react-dnd/dist/hooks/useDragDropManager.js
import { invariant as invariant4 } from "/@react-dnd/invariant@^4.0.1?target=es2020&dev";
import { useContext } from "/react@^19.2.4?target=es2020&dev";
function useDragDropManager() {
  const { dragDropManager } = useContext(DndContext);
  invariant4(dragDropManager != null, "Expected drag drop context");
  return dragDropManager;
}

// node_modules/react-dnd/dist/hooks/useDrag/useDragSourceConnector.js
function useDragSourceConnector(dragSourceOptions, dragPreviewOptions) {
  const manager = useDragDropManager();
  const connector = useMemo3(
    () => new SourceConnector(manager.getBackend()),
    [
      manager
    ]
  );
  useIsomorphicLayoutEffect(() => {
    connector.dragSourceOptions = dragSourceOptions || null;
    connector.reconnect();
    return () => connector.disconnectDragSource();
  }, [
    connector,
    dragSourceOptions
  ]);
  useIsomorphicLayoutEffect(() => {
    connector.dragPreviewOptions = dragPreviewOptions || null;
    connector.reconnect();
    return () => connector.disconnectDragPreview();
  }, [
    connector,
    dragPreviewOptions
  ]);
  return connector;
}

// node_modules/react-dnd/dist/hooks/useDrag/useDragSourceMonitor.js
import { useMemo as useMemo4 } from "/react@^19.2.4?target=es2020&dev";
function useDragSourceMonitor() {
  const manager = useDragDropManager();
  return useMemo4(
    () => new DragSourceMonitorImpl(manager),
    [
      manager
    ]
  );
}

// node_modules/react-dnd/dist/hooks/useDrag/useDragSource.js
import { useEffect as useEffect4, useMemo as useMemo5 } from "/react@^19.2.4?target=es2020&dev";

// node_modules/react-dnd/dist/hooks/useDrag/DragSourceImpl.js
var DragSourceImpl = class {
  beginDrag() {
    const spec = this.spec;
    const monitor = this.monitor;
    let result = null;
    if (typeof spec.item === "object") {
      result = spec.item;
    } else if (typeof spec.item === "function") {
      result = spec.item(monitor);
    } else {
      result = {};
    }
    return result !== null && result !== void 0 ? result : null;
  }
  canDrag() {
    const spec = this.spec;
    const monitor = this.monitor;
    if (typeof spec.canDrag === "boolean") {
      return spec.canDrag;
    } else if (typeof spec.canDrag === "function") {
      return spec.canDrag(monitor);
    } else {
      return true;
    }
  }
  isDragging(globalMonitor, target) {
    const spec = this.spec;
    const monitor = this.monitor;
    const { isDragging } = spec;
    return isDragging ? isDragging(monitor) : target === globalMonitor.getSourceId();
  }
  endDrag() {
    const spec = this.spec;
    const monitor = this.monitor;
    const connector = this.connector;
    const { end } = spec;
    if (end) {
      end(monitor.getItem(), monitor);
    }
    connector.reconnect();
  }
  constructor(spec, monitor, connector) {
    this.spec = spec;
    this.monitor = monitor;
    this.connector = connector;
  }
};

// node_modules/react-dnd/dist/hooks/useDrag/useDragSource.js
function useDragSource(spec, monitor, connector) {
  const handler = useMemo5(
    () => new DragSourceImpl(spec, monitor, connector),
    [
      monitor,
      connector
    ]
  );
  useEffect4(() => {
    handler.spec = spec;
  }, [
    spec
  ]);
  return handler;
}

// node_modules/react-dnd/dist/hooks/useDrag/useDragType.js
import { invariant as invariant5 } from "/@react-dnd/invariant@^4.0.1?target=es2020&dev";
import { useMemo as useMemo6 } from "/react@^19.2.4?target=es2020&dev";
function useDragType(spec) {
  return useMemo6(() => {
    const result = spec.type;
    invariant5(result != null, "spec.type must be defined");
    return result;
  }, [
    spec
  ]);
}

// node_modules/react-dnd/dist/hooks/useDrag/useRegisteredDragSource.js
function useRegisteredDragSource(spec, monitor, connector) {
  const manager = useDragDropManager();
  const handler = useDragSource(spec, monitor, connector);
  const itemType = useDragType(spec);
  useIsomorphicLayoutEffect(function registerDragSource() {
    if (itemType != null) {
      const [handlerId, unregister] = registerSource(itemType, handler, manager);
      monitor.receiveHandlerId(handlerId);
      connector.receiveHandlerId(handlerId);
      return unregister;
    }
    return;
  }, [
    manager,
    monitor,
    connector,
    handler,
    itemType
  ]);
}

// node_modules/react-dnd/dist/hooks/useDrag/useDrag.js
function useDrag(specArg, deps) {
  const spec = useOptionalFactory(specArg, deps);
  invariant6(!spec.begin, `useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)`);
  const monitor = useDragSourceMonitor();
  const connector = useDragSourceConnector(spec.options, spec.previewOptions);
  useRegisteredDragSource(spec, monitor, connector);
  return [
    useCollectedProps(spec.collect, monitor, connector),
    useConnectDragSource(connector),
    useConnectDragPreview(connector)
  ];
}

// node_modules/react-dnd/dist/hooks/useDragLayer.js
import { useEffect as useEffect5 } from "/react@^19.2.4?target=es2020&dev";
function useDragLayer(collect) {
  const dragDropManager = useDragDropManager();
  const monitor = dragDropManager.getMonitor();
  const [collected, updateCollected] = useCollector(monitor, collect);
  useEffect5(
    () => monitor.subscribeToOffsetChange(updateCollected)
  );
  useEffect5(
    () => monitor.subscribeToStateChange(updateCollected)
  );
  return collected;
}

// node_modules/react-dnd/dist/hooks/useDrop/connectors.js
import { useMemo as useMemo7 } from "/react@^19.2.4?target=es2020&dev";
function useConnectDropTarget(connector) {
  return useMemo7(
    () => connector.hooks.dropTarget(),
    [
      connector
    ]
  );
}

// node_modules/react-dnd/dist/hooks/useDrop/useDropTargetConnector.js
import { useMemo as useMemo8 } from "/react@^19.2.4?target=es2020&dev";
function useDropTargetConnector(options) {
  const manager = useDragDropManager();
  const connector = useMemo8(
    () => new TargetConnector(manager.getBackend()),
    [
      manager
    ]
  );
  useIsomorphicLayoutEffect(() => {
    connector.dropTargetOptions = options || null;
    connector.reconnect();
    return () => connector.disconnectDropTarget();
  }, [
    options
  ]);
  return connector;
}

// node_modules/react-dnd/dist/hooks/useDrop/useDropTargetMonitor.js
import { useMemo as useMemo9 } from "/react@^19.2.4?target=es2020&dev";
function useDropTargetMonitor() {
  const manager = useDragDropManager();
  return useMemo9(
    () => new DropTargetMonitorImpl(manager),
    [
      manager
    ]
  );
}

// node_modules/react-dnd/dist/hooks/useDrop/useAccept.js
import { invariant as invariant7 } from "/@react-dnd/invariant@^4.0.1?target=es2020&dev";
import { useMemo as useMemo10 } from "/react@^19.2.4?target=es2020&dev";
function useAccept(spec) {
  const { accept } = spec;
  return useMemo10(() => {
    invariant7(spec.accept != null, "accept must be defined");
    return Array.isArray(accept) ? accept : [
      accept
    ];
  }, [
    accept
  ]);
}

// node_modules/react-dnd/dist/hooks/useDrop/useDropTarget.js
import { useEffect as useEffect6, useMemo as useMemo11 } from "/react@^19.2.4?target=es2020&dev";

// node_modules/react-dnd/dist/hooks/useDrop/DropTargetImpl.js
var DropTargetImpl = class {
  canDrop() {
    const spec = this.spec;
    const monitor = this.monitor;
    return spec.canDrop ? spec.canDrop(monitor.getItem(), monitor) : true;
  }
  hover() {
    const spec = this.spec;
    const monitor = this.monitor;
    if (spec.hover) {
      spec.hover(monitor.getItem(), monitor);
    }
  }
  drop() {
    const spec = this.spec;
    const monitor = this.monitor;
    if (spec.drop) {
      return spec.drop(monitor.getItem(), monitor);
    }
    return;
  }
  constructor(spec, monitor) {
    this.spec = spec;
    this.monitor = monitor;
  }
};

// node_modules/react-dnd/dist/hooks/useDrop/useDropTarget.js
function useDropTarget(spec, monitor) {
  const dropTarget = useMemo11(
    () => new DropTargetImpl(spec, monitor),
    [
      monitor
    ]
  );
  useEffect6(() => {
    dropTarget.spec = spec;
  }, [
    spec
  ]);
  return dropTarget;
}

// node_modules/react-dnd/dist/hooks/useDrop/useRegisteredDropTarget.js
function useRegisteredDropTarget(spec, monitor, connector) {
  const manager = useDragDropManager();
  const dropTarget = useDropTarget(spec, monitor);
  const accept = useAccept(spec);
  useIsomorphicLayoutEffect(function registerDropTarget() {
    const [handlerId, unregister] = registerTarget(accept, dropTarget, manager);
    monitor.receiveHandlerId(handlerId);
    connector.receiveHandlerId(handlerId);
    return unregister;
  }, [
    manager,
    monitor,
    dropTarget,
    connector,
    accept.map(
      (a) => a.toString()
    ).join("|")
  ]);
}

// node_modules/react-dnd/dist/hooks/useDrop/useDrop.js
function useDrop(specArg, deps) {
  const spec = useOptionalFactory(specArg, deps);
  const monitor = useDropTargetMonitor();
  const connector = useDropTargetConnector(spec.options);
  useRegisteredDropTarget(spec, monitor, connector);
  return [
    useCollectedProps(spec.collect, monitor, connector),
    useConnectDropTarget(connector)
  ];
}
export {
  DndContext,
  DndProvider,
  DragPreviewImage,
  useDrag,
  useDragDropManager,
  useDragLayer,
  useDrop
};
//# sourceMappingURL=react-dnd.development.mjs.map