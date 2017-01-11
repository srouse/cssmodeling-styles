



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
        files: {'dist/simple/smpl_cssmodel':['models/simple/smpl_cssmodel.json']},
        options: {type:"less"}
    };
    configObj.cssmodeling["cssmodeling_simple_scss"] = {
        files: {'dist/simple/smpl_cssmodel':['models/simple/smpl_cssmodel.json']},
        options: {type:"scss"}
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


    configObj.cssmodeling["rowtb_cssmodel_less"] = {
        files: {'dist/rows/rowtb_cssmodel':['models/rows/rowtb_cssmodel.json']},
        options: {type:"less"}
    };
    configObj.cssmodeling["rowtb_cssmodel_scss"] = {
        files: {'dist/rows/rowtb_cssmodel':['models/rows/rowtb_cssmodel.json']},
        options: {type:"scss"}
    };

    configObj.cssmodeling["row12v_cssmodel_less"] = {
        files: {'dist/rows/row12v_cssmodel':['models/rows/row12v_cssmodel.json']},
        options: {type:"less"}
    };
    configObj.cssmodeling["row12v_cssmodel_scss"] = {
        files: {'dist/rows/row12v_cssmodel':['models/rows/row12v_cssmodel.json']},
        options: {type:"scss"}
    };

    configObj.cssmodeling["row20px_cssmodel_less"] = {
        files: {'dist/rows/row20px_cssmodel':['models/rows/row20px_cssmodel.json']},
        options: {type:"less"}
    };
    configObj.cssmodeling["row20px_cssmodel_scss"] = {
        files: {'dist/rows/row20px_cssmodel':['models/rows/row20px_cssmodel.json']},
        options: {type:"scss"}
    };

    configObj.cssmodeling["row16ltr_cssmodel_less"] = {
        files: {'dist/rows/row16ltr_cssmodel':['models/rows/row16ltr_cssmodel.json']},
        options: {type:"less"}
    };
    configObj.cssmodeling["row16ltr_cssmodel_scss"] = {
        files: {'dist/rows/row16ltr_cssmodel':['models/rows/row16ltr_cssmodel.json']},
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


    configObj.cssmodeling["coltb_cssmodel_less"] = {
        files: {'dist/cols/coltb_cssmodel':['models/cols/coltb_cssmodel.json']
        },options: {type:"less"}
    };
    configObj.cssmodeling["coltb_cssmodel_scss"] = {
        files: {'dist/cols/coltb_cssmodel':['models/cols/coltb_cssmodel.json']
        },options: {type:"scss"}
    };

    configObj.cssmodeling["col12v_cssmodel_less"] = {
        files: {'dist/cols/col12v_cssmodel':['models/cols/col12v_cssmodel.json']},
        options: {type:"less"}
    };
    configObj.cssmodeling["col12v_cssmodel_scss"] = {
        files: {'dist/cols/col12v_cssmodel':['models/cols/col12v_cssmodel.json']},
        options: {type:"scss"}
    };

    configObj.cssmodeling["col12vex_cssmodel_less"] = {
        files: {'dist/cols/col12vex_cssmodel':['models/cols/col12vex_cssmodel.json']},
        options: {type:"less"}
    };
    configObj.cssmodeling["col12vex_cssmodel_scss"] = {
        files: {'dist/cols/col12vex_cssmodel':['models/cols/col12vex_cssmodel.json']},
        options: {type:"scss"}
    };

    configObj.cssmodeling["col12ltr_cssmodel_less"] = {
        files: {'dist/cols/col12ltr_cssmodel':['models/cols/col12ltr_cssmodel.json']},
        options: {type:"less"}
    };
    configObj.cssmodeling["col12ltr_cssmodel_scss"] = {
        files: {'dist/cols/col12ltr_cssmodel':['models/cols/col12ltr_cssmodel.json']},
        options: {type:"scss"}
    };

    configObj.cssmodeling["colr_cssmodel_less"] = {
        files: {'dist/cols/colr_cssmodel':['models/cols/colr_cssmodel.json']},
        options: {type:"less"}
    };
    configObj.cssmodeling["colr_cssmodel_scss"] = {
        files: {'dist/cols/colr_cssmodel':['models/cols/colr_cssmodel.json']},
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
        files: {'dist/flex/flx_cssmodel':['models/flex/flx_cssmodel.json']},
        options: {type:"less"}
    };
    configObj.cssmodeling["cssmodeling_flex_scss"] = {
        files: {'dist/flex/flx_cssmodel':['models/flex/flx_cssmodel.json']},
        options: {type:"scss"}
    };



    grunt.initConfig( configObj );
    grunt.registerTask( 'default' , [
        'cssmodeling'
    ] );

}
