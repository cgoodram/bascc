import { _ as __nuxt_component_0 } from './pageHeader-ChVEVLUl.mjs';
import { resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './Container-DpXS18UO.mjs';
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

const _sfc_main = {
  name: "NewsPost",
  validate({ params, store }) {
    return store.state.news.find((element) => element.slug === params.newspage);
  },
  components: {
    pageHeader: __nuxt_component_0
  },
  data() {
    return {};
  },
  computed: {
    newsPost() {
      return this.$store.state.news.find(
        (element) => element.slug === this.$route.params.newspage
      );
    }
  },
  head() {
    return {
      title: this.newsPost.title
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_pageHeader = __nuxt_component_0;
  const _component_b_container = resolveComponent("b-container");
  const _component_b_row = resolveComponent("b-row");
  const _component_b_col = resolveComponent("b-col");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-wrapper" }, _attrs))} data-v-2819af7a>`);
  _push(ssrRenderComponent(_component_pageHeader, {
    title: $options.newsPost.title
  }, null, _parent));
  _push(`<div class="page-content" data-v-2819af7a>`);
  _push(ssrRenderComponent(_component_b_container, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_b_row, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_b_col, {
                class: "news-item",
                md: "9"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img${ssrRenderAttr("src", `${$options.newsPost.imageUrl}`)} class="img-fluid news-image shadow" data-v-2819af7a${_scopeId3}><div data-v-2819af7a${_scopeId3}>${$options.newsPost.description ?? ""}</div>`);
                  } else {
                    return [
                      createVNode("img", {
                        src: `${$options.newsPost.imageUrl}`,
                        class: "img-fluid news-image shadow"
                      }, null, 8, ["src"]),
                      createVNode("div", {
                        innerHTML: $options.newsPost.description
                      }, null, 8, ["innerHTML"])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_b_col, {
                md: "3",
                class: "contact"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="contact-item" data-v-2819af7a${_scopeId3}><h3 class="title" data-v-2819af7a${_scopeId3}>Address:</h3><p data-v-2819af7a${_scopeId3}> Unit 4, Art Business Park,<br data-v-2819af7a${_scopeId3}> Newton-Le-Willows,<br data-v-2819af7a${_scopeId3}> Merseyside,<br data-v-2819af7a${_scopeId3}> WA12 8AT </p></div><div class="contact-item" data-v-2819af7a${_scopeId3}><h3 class="title" data-v-2819af7a${_scopeId3}>Email:</h3><p data-v-2819af7a${_scopeId3}><a href="mailto:info@bascc.co.uk" target="_blank" data-v-2819af7a${_scopeId3}>info@bascc.co.uk</a></p></div><div class="contact-item" data-v-2819af7a${_scopeId3}><h3 class="title" data-v-2819af7a${_scopeId3}>Phone:</h3><p data-v-2819af7a${_scopeId3}><a href="tel:+44194270584" target="_blank" data-v-2819af7a${_scopeId3}>(01942) 870 584</a></p></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "contact-item" }, [
                        createVNode("h3", { class: "title" }, "Address:"),
                        createVNode("p", null, [
                          createTextVNode(" Unit 4, Art Business Park,"),
                          createVNode("br"),
                          createTextVNode(" Newton-Le-Willows,"),
                          createVNode("br"),
                          createTextVNode(" Merseyside,"),
                          createVNode("br"),
                          createTextVNode(" WA12 8AT ")
                        ])
                      ]),
                      createVNode("div", { class: "contact-item" }, [
                        createVNode("h3", { class: "title" }, "Email:"),
                        createVNode("p", null, [
                          createVNode("a", {
                            href: "mailto:info@bascc.co.uk",
                            target: "_blank"
                          }, "info@bascc.co.uk")
                        ])
                      ]),
                      createVNode("div", { class: "contact-item" }, [
                        createVNode("h3", { class: "title" }, "Phone:"),
                        createVNode("p", null, [
                          createVNode("a", {
                            href: "tel:+44194270584",
                            target: "_blank"
                          }, "(01942) 870 584")
                        ])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_b_col, {
                  class: "news-item",
                  md: "9"
                }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      src: `${$options.newsPost.imageUrl}`,
                      class: "img-fluid news-image shadow"
                    }, null, 8, ["src"]),
                    createVNode("div", {
                      innerHTML: $options.newsPost.description
                    }, null, 8, ["innerHTML"])
                  ]),
                  _: 1
                }),
                createVNode(_component_b_col, {
                  md: "3",
                  class: "contact"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "contact-item" }, [
                      createVNode("h3", { class: "title" }, "Address:"),
                      createVNode("p", null, [
                        createTextVNode(" Unit 4, Art Business Park,"),
                        createVNode("br"),
                        createTextVNode(" Newton-Le-Willows,"),
                        createVNode("br"),
                        createTextVNode(" Merseyside,"),
                        createVNode("br"),
                        createTextVNode(" WA12 8AT ")
                      ])
                    ]),
                    createVNode("div", { class: "contact-item" }, [
                      createVNode("h3", { class: "title" }, "Email:"),
                      createVNode("p", null, [
                        createVNode("a", {
                          href: "mailto:info@bascc.co.uk",
                          target: "_blank"
                        }, "info@bascc.co.uk")
                      ])
                    ]),
                    createVNode("div", { class: "contact-item" }, [
                      createVNode("h3", { class: "title" }, "Phone:"),
                      createVNode("p", null, [
                        createVNode("a", {
                          href: "tel:+44194270584",
                          target: "_blank"
                        }, "(01942) 870 584")
                      ])
                    ])
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
                class: "news-item",
                md: "9"
              }, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: `${$options.newsPost.imageUrl}`,
                    class: "img-fluid news-image shadow"
                  }, null, 8, ["src"]),
                  createVNode("div", {
                    innerHTML: $options.newsPost.description
                  }, null, 8, ["innerHTML"])
                ]),
                _: 1
              }),
              createVNode(_component_b_col, {
                md: "3",
                class: "contact"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "contact-item" }, [
                    createVNode("h3", { class: "title" }, "Address:"),
                    createVNode("p", null, [
                      createTextVNode(" Unit 4, Art Business Park,"),
                      createVNode("br"),
                      createTextVNode(" Newton-Le-Willows,"),
                      createVNode("br"),
                      createTextVNode(" Merseyside,"),
                      createVNode("br"),
                      createTextVNode(" WA12 8AT ")
                    ])
                  ]),
                  createVNode("div", { class: "contact-item" }, [
                    createVNode("h3", { class: "title" }, "Email:"),
                    createVNode("p", null, [
                      createVNode("a", {
                        href: "mailto:info@bascc.co.uk",
                        target: "_blank"
                      }, "info@bascc.co.uk")
                    ])
                  ]),
                  createVNode("div", { class: "contact-item" }, [
                    createVNode("h3", { class: "title" }, "Phone:"),
                    createVNode("p", null, [
                      createVNode("a", {
                        href: "tel:+44194270584",
                        target: "_blank"
                      }, "(01942) 870 584")
                    ])
                  ])
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
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/latest-news/_newspage/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-2819af7a"]]);

export { index as default };
//# sourceMappingURL=index-CJtXoba6.mjs.map
