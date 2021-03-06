import Layout from 'layout/index.vue';

const dynamic = [
  {
    path: 'quill',
    name: 'components.quill',
    component: () => import('../../views/components-demo/quill.vue'),
    meta: { title: 'components.quill' },
  },
  {
    path: 'dialog',
    name: 'components.dialog',
    component: () => import('../../views/components-demo/dialog.vue'),
    meta: { title: 'components.dialog' },
  },
  {
    path: 'cropper',
    name: 'components.cropper',
    component: () => import('../../views/components-demo/cropper.vue'),
    meta: { title: 'components.cropper', noRefresh: true }, // noRefresh: true =>不能在tags-view上刷新
  },
  {
    path: 'sortable',
    name: 'components.sortable',
    component: () => import('../../views/components-demo/sortable.vue'),
    meta: { title: 'components.sortable' },
  },
];

export default [
  {
    path: '/components',
    name: 'components.default',
    component: Layout,
    redirect: 'noRedirect',
    meta: { title: 'components.default' },
    children: [
      ...dynamic,
    ],
  },
];
