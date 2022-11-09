/**
 * @generated SignedSource<<2a1d3336b750ab9328685c5bd64678b0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "hasClientEdges": true
  },
  "name": "VisibleTodoList",
  "selections": [
    {
      "kind": "ClientEdgeToClientObject",
      "concreteType": "Todo",
      "backingField": {
        "alias": "filteredTodos",
        "args": null,
        "fragment": {
          "args": null,
          "kind": "FragmentSpread",
          "name": "RootVisibleTodosResolver"
        },
        "kind": "RelayResolver",
        "name": "visible_todos",
        "resolverModule": require('./../../relay/resolvers/Root').visible_todos,
        "path": "filteredTodos"
      },
      "linkedField": {
        "alias": "filteredTodos",
        "args": null,
        "concreteType": "Todo",
        "kind": "LinkedField",
        "name": "visible_todos",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "TodoItem"
          }
        ],
        "storageKey": null
      }
    }
  ],
  "type": "Root",
  "abstractKey": null
};

node.hash = "8c590cbeec14baf1e51f66fbce780f5f";

module.exports = node;
