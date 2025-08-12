import { _ as __nuxt_component_1 } from './servicesSidebar-yVoXVebJ.mjs';
import { resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './Card-fcf5-765.mjs';
import 'tailwind-merge';
import './Icon-DzycYtnF.mjs';
import './server.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'node:crypto';
import 'consola';
import 'node:path';
import 'vue-router';
import '@vueuse/core';
import '@iconify/vue';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import './index-B5Wt8a7N.mjs';
import '@iconify/utils/lib/css/icon';
import './Link-D6MkXhLj.mjs';
import './nuxt-link-DT8iqv60.mjs';
import './Avatar-hXOE5YxQ.mjs';
import './useButtonGroup-DIM86quX.mjs';
import './services-C3WPXYDX.mjs';

const _sfc_main = {
  name: "Services",
  components: {
    servicesSidebar: __nuxt_component_1
  },
  data() {
    return {};
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_b_container = resolveComponent("b-container");
  const _component_b_row = resolveComponent("b-row");
  const _component_b_col = resolveComponent("b-col");
  const _component_services_sidebar = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-wrapper" }, _attrs))} data-v-3dbb0fad>`);
  _push(ssrRenderComponent(_component_b_container, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_b_row, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_b_col, {
                order: "2",
                md: "8"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Main content for seo`);
                  } else {
                    return [
                      createTextVNode("Main content for seo")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_b_col, {
                order: "1",
                md: "4"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_services_sidebar, null, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_services_sidebar)
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_b_col, {
                  order: "2",
                  md: "8"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Main content for seo")
                  ]),
                  _: 1
                }),
                createVNode(_component_b_col, {
                  order: "1",
                  md: "4"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_services_sidebar)
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_b_row, null, {
            default: withCtx(() => [
              createVNode(_component_b_col, {
                order: "2",
                md: "8"
              }, {
                default: withCtx(() => [
                  createTextVNode("Main content for seo")
                ]),
                _: 1
              }),
              createVNode(_component_b_col, {
                order: "1",
                md: "4"
              }, {
                default: withCtx(() => [
                  createVNode(_component_services_sidebar)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const services = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-3dbb0fad"]]);

export { services as default };
//# sourceMappingURL=services-DvypZ5Nm.mjs.map
