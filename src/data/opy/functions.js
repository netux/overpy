/* 
 * This file is part of OverPy (https://github.com/Zezombye/overpy).
 * Copyright (c) 2019 Zezombye.
 * 
 * This program is free software: you can redistribute it and/or modify  
 * it under the terms of the GNU General Public License as published by  
 * the Free Software Foundation, version 3.
 *
 * This program is distributed in the hope that it will be useful, but 
 * WITHOUT ANY WARRANTY; without even the implied warranty of 
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU 
 * General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License 
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

"use strict";

const opyFuncs = {
//Functions

    "all": {
        "description": "Whether every value in the specified array evaluates to true. Can use mapped arrays.\n\nExample: `all([player.A == 2 for player in getAllPlayers()])`",
        "args": [
            {
                "name": "Array",
                "description": "The array whose values will be considered.",
                "type": "Array",
                "default": "GLOBAL VARIABLE"
            }
        ],
        return: "bool",
    },
    "any": {
        "description": "Whether any value in the specified array evaluates to true. Can use mapped arrays.\n\nExample: `any([player.A == 2 for player in getAllPlayers()])`",
        "args": [
            {
                "name": "Array",
                "description": "The array whose values will be considered.",
                "type": "Array",
                "default": "GLOBAL VARIABLE"
            }
        ],
        return: "bool",
    },
    "async": {
        "description": "Begins simultaneous execution of a subroutine rule (which is a rule with a Subroutine event type). Execution of the original rule continues uninterrupted. The subroutine will have access to the same contextual values (such as Event Player) as the original rule.",
        "args": [
            {
                "name": "SUBROUTINE",
                "description": "Specifies which subroutine to start. If a rule with a subroutine event type specifies the same subroutine, then it will execute. Otherwise, this action is ignored.",
                "type": "Subroutine",
                "default": "Sub0"
            },
            {
                "name": "IF ALREADY EXECUTING",
                "description": "Determines what should happen if the rule specified by the subroutine is already executing on the same player or global entity.",
                "type": "AsyncBehavior",
                "default": "RESTART RULE"
            }
        ],
        return: "void",
    },
    "ceil": {
        "description": "The integer that is the ceiling of the specified value (equivalent to rounding up).",
        "args": [
            {
                "name": "VALUE",
                "description": "The real number to get the ceiling of.",
                "type": "float",
                "default": "NUMBER"
            }
        ],
        return: "int",
    },
    "chase": {
        "description": "Gradually modifies the value of a variable (global or player) at a specific rate, or over time.",
        "args": [
            {
                "name": "VARIABLE",
                "description": "Specifies which variable (global or player) to modify gradually.",
                "type": "Variable",
                "default": "A"
            },
            {
                "name": "DESTINATION",
                "description": "The value that the variable will eventually reach. The type of this value may be either a number or a vector, though the variable's existing value must be of the same type before the chase begins.",
                "type": ["float", "Vector"],
                "default": "NUMBER"
            },
            {
                "name": "RATE OR DURATION",
                "description": "The amount of change that will happen to the variable's value each second, or the amount of time, in seconds, over which the variable's value will approach the destination.\n\nPut `rate=xxxx` or `duration=xxxx` as argument.",
                "type": "float",
                "default": "NUMBER"
            },
            {
                "name": "REEVALUATION",
                "description": "Specifies which of this action's inputs will be continuously reevaluated. This action will keep asking for and using new values from reevaluated inputs.",
                "type": "ChaseReeval",
                "default": "DESTINATION AND RATE"
            }
        ],
        return: "void",
    },
    "floor": {
        "description": "The integer that is the floor of the specified value (equivalent to rounding down).",
        "args": [
            {
                "name": "VALUE",
                "description": "The real number to get the floor of.",
                "type": "float",
                "default": "NUMBER"
            }
        ],
        return: "int",
    },
    "getAllPlayers": {
        "description": "Built-in macro for `getPlayers(Team.ALL)`.",
        "args": [],
        return: {"Array": "Player"},
    },
    "hudHeader": {
        "description": "Built-in macro for `hudText` to reduce the number of arguments.",
        "args": [
            {
                "name": "VISIBLE TO",
                "description": "One or more players who will see the hud text.",
                "type": ["Player", {Array: "Player"}],
                "default": "ALL PLAYERS"
            },
            {
                "name": "HEADER",
                "description": "The text to be displayed (can be blank)",
                "type": "Object",
                "default": "STRING"
            },
            {
                "name": "LOCATION",
                "description": "The location on the screen where the text will appear.",
                "type": "HudPosition",
                "default": "LEFT"
            },
            {
                "name": "SORT ORDER",
                "description": "The sort order of the text relative to other text in the same location. A higher sort order will come after a lower sort order.",
                "type": "float",
                "default": "NUMBER"
            },
            {
                "name": "HEADER COLOR",
                "description": "The color of the header.",
                "type": "Color",
                "default": "WHITE"
            },
            {
                "name": "REEVALUATION",
                "description": "Specifies which of this action's inputs will be continuously reevaluated.",
                "type": "HudReeval",
                "default": "VISIBLE TO AND STRING"
            },
            {
                "name": "SPECTATORS",
                "description": "Whether spectators can see the text or not. Optional argument.",
                "type": "SpecVisibility",
                "default": "DEFAULT VISIBILITY"
            }
        ],
        return: "void",
    },
    "hudSubheader": {
        "description": "Built-in macro for `hudText` to reduce the number of arguments.",
        "args": [
            {
                "name": "VISIBLE TO",
                "description": "One or more players who will see the hud text.",
                "type": ["Player", {Array: "Player"}],
                "default": "ALL PLAYERS"
            },
            {
                "name": "SUBHEADER",
                "description": "The subheader text to be displayed (can be blank)",
                "type": "Object",
                "default": "NULL"
            },
            {
                "name": "LOCATION",
                "description": "The location on the screen where the text will appear.",
                "type": "HudPosition",
                "default": "LEFT"
            },
            {
                "name": "SORT ORDER",
                "description": "The sort order of the text relative to other text in the same location. A higher sort order will come after a lower sort order.",
                "type": "float",
                "default": "NUMBER"
            },
            {
                "name": "SUBHEADER COLOR",
                "description": "The color of the subheader.",
                "type": "Color",
                "default": "WHITE"
            },
            {
                "name": "REEVALUATION",
                "description": "Specifies which of this action's inputs will be continuously reevaluated.",
                "type": "HudReeval",
                "default": "VISIBLE TO AND STRING"
            },
            {
                "name": "SPECTATORS",
                "description": "Whether spectators can see the text or not. Optional argument.",
                "type": "SpecVisibility",
                "default": "DEFAULT VISIBILITY"
            }
        ]
    },
    "hudSubtext": {
        "description": "Built-in macro for `hudText` to reduce the number of arguments.",
        "args": [
            {
                "name": "VISIBLE TO",
                "description": "One or more players who will see the hud text.",
                "type": ["Player", {Array: "Player"}],
                "default": "ALL PLAYERS"
            },
            {
                "name": "SUBTEXT",
                "description": "The body text to be displayed (can be blank)",
                "type": "Object",
                "default": "NULL"
            },
            {
                "name": "LOCATION",
                "description": "The location on the screen where the text will appear.",
                "type": "HudPosition",
                "default": "LEFT"
            },
            {
                "name": "SORT ORDER",
                "description": "The sort order of the text relative to other text in the same location. A higher sort order will come after a lower sort order.",
                "type": "float",
                "default": "NUMBER"
            },
            {
                "name": "TEXT COLOR",
                "description": "The color of the text.",
                "type": "Color",
                "default": "WHITE"
            },
            {
                "name": "REEVALUATION",
                "description": "Specifies which of this action's inputs will be continuously reevaluated.",
                "type": "HudReeval",
                "default": "VISIBLE TO AND STRING"
            },
            {
                "name": "SPECTATORS",
                "description": "Whether spectators can see the text or not. Optional argument.",
                "type": "SpecVisibility",
                "default": "DEFAULT VISIBILITY"
            }
        ],
        return: "void",
    },
    "hudText": {
        "description": "Creates hud text visible to specific players at a specific location on the screen. This text will persist until destroyed. To obtain a reference to this text, use the last text id value. This action will fail if too many text elements have been created.\n\nNote: you can use the macros `hudHeader`, `hudSubheader` and `hudSubtext` to reduce the number of arguments.",
        "args": [
            {
                "name": "VISIBLE TO",
                "description": "One or more players who will see the hud text.",
                "type": ["Player", {Array: "Player"}],
                "default": "ALL PLAYERS"
            },
            {
                "name": "HEADER",
                "description": "The text to be displayed (can be blank)",
                "type": "Object",
                "default": "STRING"
            },
            {
                "name": "SUBHEADER",
                "description": "The subheader text to be displayed (can be blank)",
                "type": "Object",
                "default": "NULL"
            },
            {
                "name": "TEXT",
                "description": "The body text to be displayed (can be blank)",
                "type": "Object",
                "default": "NULL"
            },
            {
                "name": "LOCATION",
                "description": "The location on the screen where the text will appear.",
                "type": "HudPosition",
                "default": "LEFT"
            },
            {
                "name": "SORT ORDER",
                "description": "The sort order of the text relative to other text in the same location. A higher sort order will come after a lower sort order.",
                "type": "float",
                "default": "NUMBER"
            },
            {
                "name": "HEADER COLOR",
                "description": "The color of the header.",
                "type": "Color",
                "default": "WHITE"
            },
            {
                "name": "SUBHEADER COLOR",
                "description": "The color of the subheader.",
                "type": "Color",
                "default": "WHITE"
            },
            {
                "name": "TEXT COLOR",
                "description": "The color of the text.",
                "type": "Color",
                "default": "WHITE"
            },
            {
                "name": "REEVALUATION",
                "description": "Specifies which of this action's inputs will be continuously reevaluated.",
                "type": "HudReeval",
                "default": "VISIBLE TO AND STRING"
            },
            {
                "name": "SPECTATORS",
                "description": "Whether spectators can see the text or not. Optional argument.",
                "type": "SpecVisibility",
                "default": "DEFAULT VISIBILITY"
            }
        ],
        return: "void",
    },
    "getSign": {
        "description": "Built-in macro for calculating the sign of a number. Resolves to `(x>0)-(x<0)`. Returns -1, 0 or 1.",
        "args": [
            {
                "name": "NUMBER",
                "description": "The number to calculate the sign of.",
                "type": "float",
                "default": "NUMBER"
            }
        ],
        return: "int",
    },
    "math.e": {
        "description": "The number e = 2.71828182846.",
        "args": null,
        return: "unsigned float",
    },
    "math.pi": {
        "description": "The number pi = 3.14159265359.",
        "args": null,
        return: "unsigned float",
    },
    "print": {
        "description": "Creates an orange HUD text at the top left. Should be used for quick debugging of a value.",
        "args": [
            {
                "name": "HEADER",
                "description": "The text to be displayed (can be blank)",
                "type": "Object",
                "default": "STRING"
            }
        ],
        return: "void",
    },
    "range": {
        "description": "Only usable inside a `for` instruction, such as `for i in range(1,3,2)`. If only 2 arguments are provided, they are treated as `range(start, stop)`. If only one argument is provided, it is treated as `range(stop)`.",
        "args": [
            {
                "name": "START",
                "description": "The control variable is set to this value when the loop begins. If omitted, defaults to 0.",
                "type": "float",
                "default": "NUMBER"
            },
            {
                "name": "STOP",
                "description": "If the control variable reaches or passes this value, then the loop will exit, and execution jumps to the next action after the end action. Whether this value is considered passed or not is based on whether the step value is negative or positive. If the control variable has already reached or passed this value when the loop begins, then the loop exits.",
                "type": "float",
                "default": "COUNT OF"
            },
            {
                "name": "STEP",
                "description": "This value is added to the control variable when the end action is reached. If this modification causes the control variable to reach or pass the range stop value, then the loop exits, and execution jumps to the next action after the end action. Otherwise, the loop continues, and execution jumps to the next action after the for action. If omitted, defaults to 1.",
                "type": "float",
                "default": "NUMBER"
            }
        ],
        return: "Iterator",
    },
    "raycast": {
        "description": "Defines a raycast to be then used with `getPlayerHit()`, `getNormal()` or `getHitPosition()`.",
        "args": [
            {
                "name": "START POS",
                "description": "The start position for the raycast. If a player is provided, a position 2 meters above the player's feet is used.",
                "type": "Position",
                "default": "VECTOR"
            },
            {
                "name": "END POS",
                "description": "The end position for the raycast. If a player is provided, a position 2 meters above the player's feet is used.",
                "type": "Position",
                "default": "VECTOR"
            },
            {
                "name": "players To Include",
                "description": "Which players can be hit by this raycast.",
                "type": {Array: "Player"},
                "default": "ALL PLAYERS"
            },
            {
                "name": "players To Exclude",
                "description": "Which players cannot be hit by this raycast. This list takes precedence over players to include.",
                "type": {Array: "Player"},
                "default": "EVENT PLAYER"
            },
            {
                "name": "include Player Objects",
                "description": "Whether player-owned objects (such as barriers or turrets) should be included in the raycast.",
                "type": "bool",
                "default": "TRUE"
            }
        ],
        return: "Raycast",
    },
    "round": {
        "description": "The integer that is closest to the specified value (equivalent to rounding to nearest).\n\nTo round up or down, use `ceil()` or `floor()`.",
        "args": [
            {
                "name": "VALUE",
                "description": "The real number to get the nearest integer of.",
                "type": "float",
                "default": "NUMBER"
            }
        ],
        return: "int"
    },
    "sorted": {
        "description": "A copy of the specified array with the values sorted according to the lambda function that is evaluated for each element.\n\nExample: `sorted(getAllPlayers(), key=lambda x: x.getScore())`",
        "args": [
            {
                "name": "ARRAY",
                "description": "The array whose copy will be sorted.",
                "type": {Array: "Object"},
                "default": "GLOBAL VARIABLE"
            },
            {
                "name": "lambda",
                "description": "The lambda function that is evaluated for each element of the copied array. The array is sorted by this rank in ascending order. Can be omitted if the array is sorted without a special key (equivalent to `lambda x: x`).",
                "type": "Lambda",
                "default": "CURRENT ARRAY ELEMENT"
            }
        ],
        return: {Array: "Object"},
    },
    "stopChasingVariable": {
        "description": "Stops an in-progress chase of a variable (global or player), leaving it at its current value.",
        "args": [
            {
                "name": "VARIABLE",
                "description": "Specifies which variable (global or player) to stop modifying.",
                "type": "Variable",
                "default": "A"
            }
        ],
        return: "void",
    },
    "wait": {
        "description": "Pauses the execution of the action list. Unless the wait is interrupted, the remainder of the actions will execute after the pause.",
        "args": [
            {
                "name": "TIME",
                "description": "The duration of the pause. If omitted, defaults to 0.016.",
                "type": "unsigned float",
                "default": "NUMBER"
            },
            {
                "name": "WAIT BEHAVIOR",
                "description": "Specifies if and how the wait can be interrupted. If the condition list is ignored, the wait will not be interrupted. Otherwise, the condition list will determine if and when the action list will abort or restart. If omitted, defaults to `Wait.IGNORE_CONDITION`.",
                "type": "Wait",
                "default": "IGNORE CONDITION"
            }
        ],
        return: "void",
    },
}
