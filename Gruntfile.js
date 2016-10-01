



module.exports = function(grunt) {

    grunt.loadNpmTasks('cssmodeling');

    var configObj = {
        pkg: '<json:package.json>'
    };

    /*==========================
    CSSMODELING
    ==========================*/
    configObj.cssmodeling = configObj.cssmodeling || {};


    //=============SIMPLE===============
    configObj.cssmodeling["cssmodeling_simple_less"] = {
        files: {
            'dist/simple/cssmodeling_simple':
            ['models/simple/cssmodeling_simple.json']
        },
        options: {
            type:"less",
            var_prefix:"v-"
        }
    };
    configObj.cssmodeling["cssmodeling_simple_scss"] = {
        files: {
            'dist/simple/cssmodeling_simple':
            ['models/simple/cssmodeling_simple.json']
        },
        options: {
            type:"scss",
            var_prefix:"v-"
        }
    };

    configObj.cssmodeling["cssmodeling_simple_less"] = {
        files: {
            'dist/simple/smpl_simple_cssmodel':
            ['models/simple/smpl_simple_cssmodel.json']
        },
        options: {
            type:"less",
            var_prefix:""
        }
    };
    configObj.cssmodeling["cssmodeling_simple_scss"] = {
        files: {
            'dist/simple/smpl_simple_cssmodel':
            ['models/simple/smpl_simple_cssmodel.json']
        },
        options: {
            type:"scss",
            var_prefix:""
        }
    };

    //=============ROWS===============
    configObj.cssmodeling["cssmodeling_rows_quartered_less"] = {
        files: {
            'dist/rows/cssmodeling_rows_quartered':
            ['models/rows/cssmodeling_rows_quartered.json']
        },
        options: {
            type:"less",
            var_prefix:"v-"
        }
    };
    configObj.cssmodeling["cssmodeling_rows_quartered_scss"] = {
        files: {
            'dist/rows/cssmodeling_rows_quartered':
            ['models/rows/cssmodeling_rows_quartered.json']
        },
        options: {
            type:"scss",
            var_prefix:"v-"
        }
    };

    configObj.cssmodeling["cssmodeling_rows_vh_quartered_less"] = {
        files: {
            'dist/rows/cssmodeling_rows_vh_quartered':
            ['models/rows/cssmodeling_rows_vh_quartered.json']
        },
        options: {
            type:"less",
            var_prefix:"v-"
        }
    };
    configObj.cssmodeling["cssmodeling_rows_vh_quartered_scss"] = {
        files: {
            'dist/rows/cssmodeling_rows_vh_quartered':
            ['models/rows/cssmodeling_rows_vh_quartered.json']
        },
        options: {
            type:"scss",
            var_prefix:"v-"
        }
    };

    configObj.cssmodeling["cssmodeling_tablet_vh_less"] = {
        files: {
            'dist/rows/cssmodeling_tablet_vh':
            ['models/rows/cssmodeling_tablet_vh.json']
        },
        options: {
            type:"less",
            var_prefix:"v-"
        }
    };
    configObj.cssmodeling["cssmodeling_tablet_vh_scss"] = {
        files: {
            'dist/rows/cssmodeling_tablet_vh':
            ['models/rows/cssmodeling_tablet_vh.json']
        },
        options: {
            type:"scss",
            var_prefix:"v-"
        }
    };


    configObj.cssmodeling["vhtb_rows_cssmodel_less"] = {
        files: {'dist/rows/vhtb_rows_cssmodel':['models/rows/vhtb_rows_cssmodel.json']},
        options: {type:"less"}
    };
    configObj.cssmodeling["vhtb_rows_cssmodel_scss"] = {
        files: {'dist/rows/vhtb_rows_cssmodel':['models/rows/vhtb_rows_cssmodel.json']},
        options: {type:"scss"}
    };

    configObj.cssmodeling["vh12_rows_cssmodel_less"] = {
        files: {'dist/rows/vh12_rows_cssmodel':['models/rows/vh12_rows_cssmodel.json']},
        options: {type:"less"}
    };
    configObj.cssmodeling["vh12_rows_cssmodel_scss"] = {
        files: {'dist/rows/vh12_rows_cssmodel':['models/rows/vh12_rows_cssmodel.json']},
        options: {type:"scss"}
    };

    configObj.cssmodeling["rwpx_rows_cssmodel_less"] = {
        files: {'dist/rows/rwpx_rows_cssmodel':['models/rows/rwpx_rows_cssmodel.json']},
        options: {type:"less"}
    };
    configObj.cssmodeling["rwpx_rows_cssmodel_scss"] = {
        files: {'dist/rows/rwpx_rows_cssmodel':['models/rows/rwpx_rows_cssmodel.json']},
        options: {type:"scss"}
    };


    //=============COLS===============
    configObj.cssmodeling["cssmodeling_col_12_quartered_viewport_breakpoints_less"] = {
        files: {
            'dist/cols/cssmodeling_col_12_quartered_viewport_breakpoints':
            ['models/cols/cssmodeling_col_12_quartered_viewport_breakpoints.json']
        },
        options: {
            type:"less",
            var_prefix:"v-"
        }
    };
    configObj.cssmodeling["cssmodeling_col_12_quartered_viewport_breakpoints_scss"] = {
        files: {
            'dist/cols/cssmodeling_col_12_quartered_viewport_breakpoints':
            ['models/cols/cssmodeling_col_12_quartered_viewport_breakpoints.json']
        },
        options: {
            type:"scss",
            var_prefix:"v-"
        }
    };

    configObj.cssmodeling["cssmodeling_col_12_quartered_viewport_less"] = {
        files: {
            'dist/cols/cssmodeling_col_12_quartered_viewport':
            ['models/cols/cssmodeling_col_12_quartered_viewport.json']
        },
        options: {
            type:"less",
            var_prefix:"v-"
        }
    };
    configObj.cssmodeling["cssmodeling_col_12_quartered_viewport_scss"] = {
        files: {
            'dist/cols/cssmodeling_col_12_quartered_viewport':
            ['models/cols/cssmodeling_col_12_quartered_viewport.json']
        },
        options: {
            type:"scss",
            var_prefix:"v-"
        }
    };

    configObj.cssmodeling["cssmodeling_tablet_vw_less"] = {
        files: {
            'dist/cols/cssmodeling_tablet_vw':
            ['models/cols/cssmodeling_tablet_vw.json']
        },
        options: {
            type:"less",
            var_prefix:"v-"
        }
    };
    configObj.cssmodeling["cssmodeling_tablet_vw_scss"] = {
        files: {
            'dist/cols/cssmodeling_tablet_vw':
            ['models/cols/cssmodeling_tablet_vw.json']
        },
        options: {
            type:"scss",
            var_prefix:"v-"
        }
    };

    configObj.cssmodeling["cssmodeling_col_testing"] = {
        files: {
            'dist/rows/cssmodeling_col_testing':[
                'models/rows/cssmodeling_col_12_quartered_viewport_breakpoints.json',
                'models/rows/cssmodeling_col_12_quartered_viewport.json',
                'models/rows/cssmodeling_tablet_vw.json'
            ]
        },
        options: {
            type:"scss",
            var_prefix:"v-"
        }
    };


    configObj.cssmodeling["vwtb_cols_cssmodel_less"] = {
        files: {'dist/cols/vwtb_cols_cssmodel':['models/cols/vwtb_cols_cssmodel.json']
        },options: {type:"less"}
    };
    configObj.cssmodeling["vwtb_cols_cssmodel_scss"] = {
        files: {'dist/cols/vwtb_cols_cssmodel':['models/cols/vwtb_cols_cssmodel.json']
        },options: {type:"scss"}
    };

    configObj.cssmodeling["vw12_cols_cssmodel_less"] = {
        files: {'dist/cols/vw12_cols_cssmodel':['models/cols/vw12_cols_cssmodel.json']},
        options: {type:"less"}
    };
    configObj.cssmodeling["vw12_cols_cssmodel_scss"] = {
        files: {'dist/cols/vw12_cols_cssmodel':['models/cols/vw12_cols_cssmodel.json']},
        options: {type:"scss"}
    };

    configObj.cssmodeling["vw12x_cols_cssmodel_less"] = {
        files: {'dist/cols/vw12x_cols_cssmodel':['models/cols/vw12x_cols_cssmodel.json']},
        options: {type:"less"}
    };
    configObj.cssmodeling["vw12x_cols_cssmodel_scss"] = {
        files: {'dist/cols/vw12x_cols_cssmodel':['models/cols/vw12x_cols_cssmodel.json']},
        options: {type:"scss"}
    };

    //=============FLEX===============
    configObj.cssmodeling["cssmodeling_flex_less"] = {
        files: {
            'dist/flex/cssmodeling_flex':
            ['models/flex/cssmodeling_flex.json']
        },
        options: {
            type:"less",
            var_prefix:"v-"
        }
    };
    configObj.cssmodeling["cssmodeling_flex_scss"] = {
        files: {
            'dist/flex/cssmodeling_flex':
            ['models/flex/cssmodeling_flex.json']
        },
        options: {
            type:"scss",
            var_prefix:"v-"
        }
    };

    configObj.cssmodeling["cssmodeling_flex_less"] = {
        files: {
            'dist/flex/flx_flex_cssmodel':
            ['models/flex/flx_flex_cssmodel.json']
        },
        options: {
            type:"less"
        }
    };
    configObj.cssmodeling["cssmodeling_flex_scss"] = {
        files: {
            'dist/flex/flx_flex_cssmodel':
            ['models/flex/flx_flex_cssmodel.json']
        },
        options: {
            type:"scss"
        }
    };



    grunt.initConfig( configObj );
    grunt.registerTask( 'default' , [
        'cssmodeling'
    ] );

}
