
var my_dataset = ['room0_rgb_gif', 'room0_segment_gif', 'room0_crossagent_gif', 'room0_crossframe_gif',
    'room1_rgb_gif', 'room1_segment_gif', 'room1_crossagent_gif', 'room1_crossframe_gif',
    'office3_rgb_gif', 'office3_segment_gif', 'office3_crossagent_gif', 'office3_crossframe_gif',
    'room0_rgb_glb', 'room0_semantic_glb', 'room0_isntance_glb',
    'room1_rgb_glb', 'room1_semantic_glb', 'room1_isntance_glb',
    'office3_rgb_glb', 'office3_semantic_glb', 'office3_isntance_glb'
];

$(function () {
    $('.partial_label-selector-3D').change(function () {
        var dataset = $('#partial_label-selector1_3D').val();
        var dataset1 = $('#partial_label-selector1_3D_scene').val();
        var final_dataset_gif = dataset1 + '_' + dataset + '_' + 'gif';
        var final_dataset_glb = dataset1 + '_' + dataset + '_' + 'glb';

        $('.partial_label_3D').hide();

        var i = 0;
        for (i = 0; i < my_dataset.length; i++) {

            if (final_dataset_gif == my_dataset[i]) {
                $('.partial_label_3D.' + my_dataset[i]).show();
                break;
            }
            else if (final_dataset_glb == my_dataset[i]) {
                $('.partial_label_3D.' + my_dataset[i]).show();
                break;
            }

        }
        console.log('.partial_label_3D.' + my_dataset[i])
    });
});