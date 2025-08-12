import { _ as __nuxt_component_0 } from './pageHeader-ChVEVLUl.mjs';
import { _ as __nuxt_component_0$1 } from './Card-fcf5-765.mjs';
import { _ as __nuxt_component_0$2 } from './nuxt-link-DT8iqv60.mjs';
import { resolveComponent, mergeProps, withCtx, createBlock, openBlock, Fragment, renderList, createVNode, createTextVNode, defineComponent, createCommentVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "newsSnippet",
  __ssrInlineRender: true,
  props: {
    title: {},
    snippet: {},
    imageUrl: {},
    posted: {},
    slug: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UCard = __nuxt_component_0$1;
      const _component_NuxtLink = __nuxt_component_0$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "news-snippet" }, _attrs))} data-v-b240af4c>`);
      _push(ssrRenderComponent(_component_UCard, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="news-header" data-v-b240af4c${_scopeId}><h3 data-v-b240af4c${_scopeId}>${ssrInterpolate(_ctx.title)}</h3><span class="date" data-v-b240af4c${_scopeId}>${ssrInterpolate(_ctx.posted)}</span></div>`);
          } else {
            return [
              createVNode("div", { class: "news-header" }, [
                createVNode("h3", null, toDisplayString(_ctx.title), 1),
                createVNode("span", { class: "date" }, toDisplayString(_ctx.posted), 1)
              ])
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: `/latest-news/${_ctx.slug}`,
              class: "read-more"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Read More `);
                } else {
                  return [
                    createTextVNode(" Read More ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtLink, {
                to: `/latest-news/${_ctx.slug}`,
                class: "read-more"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Read More ")
                ]),
                _: 1
              }, 8, ["to"])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="news-content" data-v-b240af4c${_scopeId}>`);
            if (_ctx.imageUrl) {
              _push2(`<div class="news-image" data-v-b240af4c${_scopeId}><img${ssrRenderAttr("src", _ctx.imageUrl)}${ssrRenderAttr("alt", _ctx.title)} data-v-b240af4c${_scopeId}></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="news-text" data-v-b240af4c${_scopeId}><p data-v-b240af4c${_scopeId}>${_ctx.snippet ?? ""}</p></div></div>`);
          } else {
            return [
              createVNode("div", { class: "news-content" }, [
                _ctx.imageUrl ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "news-image"
                }, [
                  createVNode("img", {
                    src: _ctx.imageUrl,
                    alt: _ctx.title
                  }, null, 8, ["src", "alt"])
                ])) : createCommentVNode("", true),
                createVNode("div", { class: "news-text" }, [
                  createVNode("p", { innerHTML: _ctx.snippet }, null, 8, ["innerHTML"])
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/newsSnippet.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["__scopeId", "data-v-b240af4c"]]), { __name: "NewsSnippet" });
const _sfc_main = {
  name: "News",
  components: {
    pageHeader: __nuxt_component_0,
    newsSnippet: __nuxt_component_1
  },
  data() {
    return {};
  },
  computed: {
    getNews() {
      return this.$store.state.news;
    }
  },
  head() {
    return {
      title: "Latest news - Balanced Air Specialists"
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_pageHeader = __nuxt_component_0;
  const _component_b_container = resolveComponent("b-container");
  const _component_b_row = resolveComponent("b-row");
  const _component_b_col = resolveComponent("b-col");
  const _component_newsSnippet = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-wrapper" }, _attrs))} data-v-d705ebda>`);
  _push(ssrRenderComponent(_component_pageHeader, {
    title: "Latest news",
    breadcrumb: [{ label: "latest news", url: null }]
  }, null, _parent));
  _push(`<div class="page-content" data-v-d705ebda>`);
  _push(ssrRenderComponent(_component_b_container, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_b_row, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_b_col, { md: "9" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<!--[-->`);
                    ssrRenderList($options.getNews, (newsPost) => {
                      _push4(ssrRenderComponent(_component_newsSnippet, {
                        key: newsPost.title,
                        "news-post": newsPost
                      }, null, _parent4, _scopeId3));
                    });
                    _push4(`<!--]-->`);
                  } else {
                    return [
                      (openBlock(true), createBlock(Fragment, null, renderList($options.getNews, (newsPost) => {
                        return openBlock(), createBlock(_component_newsSnippet, {
                          key: newsPost.title,
                          "news-post": newsPost
                        }, null, 8, ["news-post"]);
                      }), 128))
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
                    _push4(`<div class="contact-item" data-v-d705ebda${_scopeId3}><h3 class="title" data-v-d705ebda${_scopeId3}>Address:</h3><p data-v-d705ebda${_scopeId3}> Unit 4, Art Business Park,<br data-v-d705ebda${_scopeId3}> Newton-Le-Willows,<br data-v-d705ebda${_scopeId3}> Merseyside,<br data-v-d705ebda${_scopeId3}> WA12 8AT </p></div><div class="contact-item" data-v-d705ebda${_scopeId3}><h3 class="title" data-v-d705ebda${_scopeId3}>Email:</h3><p data-v-d705ebda${_scopeId3}><a href="mailto:info@bascc.co.uk" target="_blank" data-v-d705ebda${_scopeId3}>info@bascc.co.uk</a></p></div><div class="contact-item" data-v-d705ebda${_scopeId3}><h3 class="title" data-v-d705ebda${_scopeId3}>Phone:</h3><p data-v-d705ebda${_scopeId3}><a href="tel:+44194270584" target="_blank" data-v-d705ebda${_scopeId3}>(01942) 870 584</a></p></div>`);
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
                createVNode(_component_b_col, { md: "9" }, {
                  default: withCtx(() => [
                    (openBlock(true), createBlock(Fragment, null, renderList($options.getNews, (newsPost) => {
                      return openBlock(), createBlock(_component_newsSnippet, {
                        key: newsPost.title,
                        "news-post": newsPost
                      }, null, 8, ["news-post"]);
                    }), 128))
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
              createVNode(_component_b_col, { md: "9" }, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList($options.getNews, (newsPost) => {
                    return openBlock(), createBlock(_component_newsSnippet, {
                      key: newsPost.title,
                      "news-post": newsPost
                    }, null, 8, ["news-post"]);
                  }), 128))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/latest-news/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-d705ebda"]]);

export { index as default };
//# sourceMappingURL=index-COb3hzjX.mjs.map
