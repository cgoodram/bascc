import { _ as __nuxt_component_0 } from './Container-DpXS18UO.mjs';
import { _ as __nuxt_component_1 } from './Button-DLq0kSUH.mjs';
import { defineComponent, mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "cta",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UContainer = __nuxt_component_0;
      const _component_UButton = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "cta-section" }, _attrs))} data-v-5b0ed9f6>`);
      _push(ssrRenderComponent(_component_UContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="cta-content" data-v-5b0ed9f6${_scopeId}><div class="cta-text" data-v-5b0ed9f6${_scopeId}><h2 data-v-5b0ed9f6${_scopeId}>Ready to get started?</h2><p data-v-5b0ed9f6${_scopeId}>Contact us today to discuss your cleanroom validation needs</p></div><div class="cta-action" data-v-5b0ed9f6${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              to: "/contact",
              color: "white",
              variant: "solid",
              size: "lg"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Get in Touch `);
                } else {
                  return [
                    createTextVNode(" Get in Touch ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "cta-content" }, [
                createVNode("div", { class: "cta-text" }, [
                  createVNode("h2", null, "Ready to get started?"),
                  createVNode("p", null, "Contact us today to discuss your cleanroom validation needs")
                ]),
                createVNode("div", { class: "cta-action" }, [
                  createVNode(_component_UButton, {
                    to: "/contact",
                    color: "white",
                    variant: "solid",
                    size: "lg"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Get in Touch ")
                    ]),
                    _: 1
                  })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cta.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main, [["__scopeId", "data-v-5b0ed9f6"]]), { __name: "Cta" });

export { __nuxt_component_2 as _ };
//# sourceMappingURL=cta-B1u54W-w.mjs.map
