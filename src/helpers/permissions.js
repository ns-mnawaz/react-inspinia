import { cloneDeep } from 'lodash';

export function getTreeMenu(menu, parent = '0') {
  const menuList = cloneDeep(menu);
  return _getNestedChildren(menuList, parent, 'tree');
}

export function getTreePermission(menu, parent = '0') {
  const menuList = cloneDeep(menu);
  return _getNestedPermissions(menuList, parent);
}

function _getNestedChildren(arr, parent, childName = 'children') {
  const out = [];
  for (const i in arr) {
    if (arr[i].parent === parent) {
      const children = _getNestedChildren(arr, arr[i].id, childName);
      if (children.length) {
        arr[i][childName] = children;
      }
      out.push(arr[i]);
    }
  }
  return out;
}

function _getNestedPermissions(arr, parent, childName = 'children') {
  const out = [];
  for (const i in arr) {
    arr[i].key = arr[i].id;
    arr[i].title = arr[i].label;
    if (arr[i].parent === parent) {
      const children = _getNestedPermissions(arr, arr[i].id, childName);
      if (children.length) {
        arr[i][childName] = children;
      }
      out.push(arr[i]);
    }
  }
  return out;
}
