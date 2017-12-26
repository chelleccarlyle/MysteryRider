using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Newtonsoft.Json;
using System.Net;

// To parse this JSON data, add NuGet 'Newtonsoft.Json' then do:
//
//    using MysteryRider.Models;
//
//    var data = FormData.FromJson(jsonString);
//
namespace MysteryRider.Models
{

    public partial class FormData
    {
        [JsonProperty("q1_01_input")]
        public string Q101_Input { get; set; }

        [JsonProperty("q1_02_input")]
        public string Q102_Input { get; set; }

        [JsonProperty("q1_03_input")]
        public string Q103_Input { get; set; }

        [JsonProperty("q1_04_input")]
        public string Q104_Input { get; set; }

        [JsonProperty("q1_05_input")]
        public string Q105_Input { get; set; }

        [JsonProperty("q1_06_input")]
        public string Q106_Input { get; set; }

        [JsonProperty("q1_07_input")]
        public string Q107_Input { get; set; }

        [JsonProperty("q1_08_input")]
        public string Q108_Input { get; set; }

        [JsonProperty("q1_09_input")]
        public string Q109_Input { get; set; }

        [JsonProperty("q1_1_input")]
        public string Q11_Input { get; set; }

        [JsonProperty("q1_11_input")]
        public string Q111_Input { get; set; }

        [JsonProperty("q1_12_input")]
        public string Q112_Input { get; set; }

        [JsonProperty("q1_13_input")]
        public string Q113_Input { get; set; }

        [JsonProperty("q1_14_input")]
        public string Q114_Input { get; set; }

        [JsonProperty("q1_15_input")]
        public string Q115_Input { get; set; }

        [JsonProperty("q1_16_input")]
        public string Q116_Input { get; set; }

        [JsonProperty("q1_17_input")]
        public string Q117_Input { get; set; }

        [JsonProperty("q1_18_input")]
        public string Q118_Input { get; set; }

        [JsonProperty("q1_19_input")]
        public string[] Q119_Input { get; set; }

        [JsonProperty("q2_01_input")]
        public string[] Q201_Input { get; set; }

        [JsonProperty("q2_02a_input")]
        public string[] Q202AInput { get; set; }

        [JsonProperty("q2_02b_input")]
        public string[] Q202BInput { get; set; }

        [JsonProperty("q2_02c_input")]
        public string[] Q202CInput { get; set; }

        [JsonProperty("q2_02d_input")]
        public string[] Q202DInput { get; set; }

        [JsonProperty("q2_02e_input")]
        public string[] Q202EInput { get; set; }

        [JsonProperty("q2_02f_input")]
        public string[] Q202FInput { get; set; }

        [JsonProperty("q2_02g_input")]
        public string[] Q202GInput { get; set; }

        [JsonProperty("q2_02h_input")]
        public string[] Q202HInput { get; set; }

        [JsonProperty("q2_03a_input")]
        public string Q203AInput { get; set; }

        [JsonProperty("q2_03b_input")]
        public string Q203BInput { get; set; }

        [JsonProperty("q2_03c_input")]
        public string Q203CInput { get; set; }

        [JsonProperty("q2_03d_input")]
        public string Q203DInput { get; set; }

        [JsonProperty("q2_04_input")]
        public string Q204_Input { get; set; }

        [JsonProperty("q2_05a_input")]
        public string Q205AInput { get; set; }

        [JsonProperty("q2_05b_input")]
        public string Q205BInput { get; set; }

        [JsonProperty("q2_05c_input")]
        public string Q205CInput { get; set; }

        [JsonProperty("q2_06a_input")]
        public string Q206AInput { get; set; }

        [JsonProperty("q2_06b_input")]
        public string Q206BInput { get; set; }

        [JsonProperty("q2_06c_input")]
        public string Q206CInput { get; set; }

        [JsonProperty("q2_06d_input")]
        public string Q206DInput { get; set; }

        [JsonProperty("q2_06e_input")]
        public string Q206EInput { get; set; }

        [JsonProperty("q2_06f_input")]
        public string Q206FInput { get; set; }

        [JsonProperty("q2_7a_input")]
        public string Q27AInput { get; set; }

        [JsonProperty("q2_7b_input")]
        public string Q27BInput { get; set; }

        [JsonProperty("q2_7c_input")]
        public string Q27CInput { get; set; }

        [JsonProperty("q2_7d_input")]
        public string Q27DInput { get; set; }

        [JsonProperty("q2_7e_input")]
        public string Q27EInput { get; set; }

        [JsonProperty("q2_8a_input")]
        public string Q28AInput { get; set; }

        [JsonProperty("q2_8b_input")]
        public string Q28BInput { get; set; }

        [JsonProperty("q2_8c_input")]
        public string Q28CInput { get; set; }

        [JsonProperty("q2_8d_input")]
        public string Q28DInput { get; set; }

        [JsonProperty("q2_8e_input")]
        public string Q28EInput { get; set; }

        [JsonProperty("q2_9a_input")]
        public string Q29AInput { get; set; }

        [JsonProperty("q2_9b_input")]
        public string Q29BInput { get; set; }

        [JsonProperty("q2_9c_input")]
        public string Q29CInput { get; set; }

        [JsonProperty("q2_9d_input")]
        public string Q29DInput { get; set; }

        [JsonProperty("q2_9e_input")]
        public string Q29EInput { get; set; }

        [JsonProperty("q2_9f_input")]
        public string Q29FInput { get; set; }

        [JsonProperty("q2_10a_input")]
        public string Q210AInput { get; set; }

        [JsonProperty("q2_10b_input")]
        public string Q210BInput { get; set; }

        [JsonProperty("q2_10c_input")]
        public string Q210CInput { get; set; }

        [JsonProperty("q2_10d_input")]
        public string Q210DInput { get; set; }

        [JsonProperty("q2_11a_input")]
        public string Q211AInput { get; set; }

        [JsonProperty("q2_11b_input")]
        public string Q211BInput { get; set; }

        [JsonProperty("q2_11c_input")]
        public string Q211CInput { get; set; }

        [JsonProperty("q2_11d_input")]
        public string Q211DInput { get; set; }

        [JsonProperty("q2_11e_input")]
        public string Q211EInput { get; set; }

        [JsonProperty("q2_12a_input")]
        public string Q212AInput { get; set; }

        [JsonProperty("q2_12b_input")]
        public string Q212BInput { get; set; }

        [JsonProperty("q2_12c_input")]
        public string Q212CInput { get; set; }

        [JsonProperty("q2_13_input")]
        public string Q213_Input { get; set; }

        [JsonProperty("q3_01_input")]
        public string Q301_Input { get; set; }

        [JsonProperty("q3_02_input")]
        public string Q302_Input { get; set; }

        [JsonProperty("q3_03_input")]
        public string[] Q303_Input { get; set; }

        [JsonProperty("q3_04_input")]
        public string Q304_Input { get; set; }

        [JsonProperty("q3_5a_input")]
        public string Q35AInput { get; set; }

        [JsonProperty("q3_5b_input")]
        public string Q35BInput { get; set; }

        [JsonProperty("q3_5d_input")]
        public string Q35DInput { get; set; }

        [JsonProperty("q3_5e_input")]
        public string Q35EInput { get; set; }

        [JsonProperty("q3_5f_input")]
        public string Q35FInput { get; set; }

        [JsonProperty("q3_5g_input")]
        public string Q35GInput { get; set; }

        [JsonProperty("q3_5c_input")]
        public string Q35CInput { get; set; }

        [JsonProperty("q3_6a_input")]
        public string Q36AInput { get; set; }

        [JsonProperty("q3_6b_input")]
        public string Q36BInput { get; set; }

        [JsonProperty("q3_6c_input")]
        public string Q36CInput { get; set; }

        [JsonProperty("q3_6d_input")]
        public string Q36DInput { get; set; }

        [JsonProperty("q3_6e_input")]
        public string Q36EInput { get; set; }

        [JsonProperty("q3_7b_input")]
        public string Q37BInput { get; set; }

        [JsonProperty("q3_7c_input")]
        public string Q37CInput { get; set; }

        [JsonProperty("q3_7a_input")]
        public string Q37AInput { get; set; }

        [JsonProperty("q3_08_input")]
        public string Q308_Input { get; set; }

        [JsonProperty("q3_09_input")]
        public string Q309_Input { get; set; }

        [JsonProperty("q3_10a_input")]
        public string Q310AInput { get; set; }

        [JsonProperty("q3_10b_input")]
        public string Q310BInput { get; set; }

        [JsonProperty("q3_10c_input")]
        public string Q310CInput { get; set; }

        [JsonProperty("q3_10d_input")]
        public string Q310DInput { get; set; }

        [JsonProperty("q3_10e_input")]
        public string Q310EInput { get; set; }

        [JsonProperty("q3_10f_input")]
        public string Q310FInput { get; set; }

        [JsonProperty("q3_11a_input")]
        public string Q311AInput { get; set; }

        [JsonProperty("q3_11b_input")]
        public string Q311BInput { get; set; }

        [JsonProperty("q3_11c_input")]
        public string Q311CInput { get; set; }

        [JsonProperty("q3_11d_input")]
        public string Q311DInput { get; set; }

        [JsonProperty("q3_11e_input")]
        public string Q311EInput { get; set; }

        [JsonProperty("q3_12a_input")]
        public string Q312AInput { get; set; }

        [JsonProperty("q3_12b_input")]
        public string Q312BInput { get; set; }

        [JsonProperty("q3_12c_input")]
        public string Q312CInput { get; set; }

        [JsonProperty("q3_12d_input")]
        public string Q312DInput { get; set; }

        [JsonProperty("q3_12e_input")]
        public string Q312EInput { get; set; }

        [JsonProperty("q3_13a_input")]
        public string Q313AInput { get; set; }

        [JsonProperty("q3_13b_input")]
        public string Q313BInput { get; set; }

        [JsonProperty("q3_13c_input")]
        public string Q313CInput { get; set; }

        [JsonProperty("q3_13d_input")]
        public string Q313DInput { get; set; }

        [JsonProperty("q3_13e_input")]
        public string Q313EInput { get; set; }

        [JsonProperty("q3_13f_input")]
        public string Q313FInput { get; set; }

        [JsonProperty("q3_14a_input")]
        public string Q314AInput { get; set; }

        [JsonProperty("q3_14b_input")]
        public string Q314BInput { get; set; }

        [JsonProperty("q3_14c_input")]
        public string Q314CInput { get; set; }

        [JsonProperty("q3_14d_input")]
        public string Q314DInput { get; set; }

        [JsonProperty("q3_15a_input")]
        public string Q315AInput { get; set; }

        [JsonProperty("q3_15b_input")]
        public string Q315BInput { get; set; }

        [JsonProperty("q3_15c_input")]
        public string Q315CInput { get; set; }

        [JsonProperty("q3_15d_input")]
        public string Q315DInput { get; set; }

        [JsonProperty("q3_15e_input")]
        public string Q315EInput { get; set; }

        [JsonProperty("q3_16a_input")]
        public string Q316AInput { get; set; }

        [JsonProperty("q3_16b_input")]
        public string Q316BInput { get; set; }

        [JsonProperty("q3_16c_input")]
        public string Q316CInput { get; set; }

        [JsonProperty("q3_17_input")]
        public string Q317_Input { get; set; }

        [JsonProperty("q3_18_input")]
        public string Q318_Input { get; set; }

        [JsonProperty("q3_19_input")]
        public string Q319_Input { get; set; }

        [JsonProperty("q4_1a_input")]
        public string Q41AInput { get; set; }

        [JsonProperty("q4_1b_input")]
        public string Q41BInput { get; set; }

        [JsonProperty("q4_1c_input")]
        public string Q41CInput { get; set; }

        [JsonProperty("q4_1d_input")]
        public string Q41DInput { get; set; }

        [JsonProperty("q4_1e_input")]
        public string Q41EInput { get; set; }

        [JsonProperty("q4_2a_input")]
        public string Q42AInput { get; set; }

        [JsonProperty("q4_2b_input")]
        public string Q42BInput { get; set; }

        [JsonProperty("q4_2c_input")]
        public string Q42CInput { get; set; }

        [JsonProperty("q4_2d_input")]
        public string Q42DInput { get; set; }

        [JsonProperty("q4_2e_input")]
        public string Q42EInput { get; set; }

        [JsonProperty("q4_3a_input")]
        public string Q43AInput { get; set; }

        [JsonProperty("q4_3b_input")]
        public string Q43BInput { get; set; }

        [JsonProperty("q4_3c_input")]
        public string Q43CInput { get; set; }

        [JsonProperty("q4_3d_input")]
        public string Q43DInput { get; set; }

        [JsonProperty("q4_3e_input")]
        public string Q43EInput { get; set; }

        [JsonProperty("q4_4a_input")]
        public string Q44AInput { get; set; }

        [JsonProperty("q4_4b_input")]
        public string Q44BInput { get; set; }

        [JsonProperty("q4_4c_input")]
        public string Q44CInput { get; set; }

        [JsonProperty("q4_4d_input")]
        public string Q44DInput { get; set; }

        [JsonProperty("q4_4e_input")]
        public string Q44EInput { get; set; }

        [JsonProperty("q4_5a_input")]
        public string Q45AInput { get; set; }

        [JsonProperty("q4_5b_input")]
        public string Q45BInput { get; set; }

        [JsonProperty("q4_5c_input")]
        public string Q45CInput { get; set; }

        [JsonProperty("q4_5d_input")]
        public string Q45DInput { get; set; }

        [JsonProperty("q4_5e_input")]
        public string Q45EInput { get; set; }

        [JsonProperty("q5_01_input")]
        public string Q501_Input { get; set; }

        [JsonProperty("q5_02_input")]
        public string Q502_Input { get; set; }

        [JsonProperty("q5_03_input")]
        public string Q503_Input { get; set; }

        [JsonProperty("q6_01_input")]
        public string Q601_Input { get; set; }

        [JsonProperty("q7_01_input")]
        public string Q701_Input { get; set; }

        [JsonProperty("q7_02_input")]
        public string Q702_Input { get; set; }

        [JsonProperty("q7_03_input")]
        public string Q703_Input { get; set; }

        [JsonProperty("q7_04_input")]
        public string Q704_Input { get; set; }

        [JsonProperty("q7_05_input")]
        public string Q705_Input { get; set; }

        [JsonProperty("q7_06_input")]
        public string Q706_Input { get; set; }

        [JsonProperty("q7_07_input")]
        public string Q707_Input { get; set; }

        [JsonProperty("q7_08_input")]
        public string Q708_Input { get; set; }

        [JsonProperty("q7_09_input")]
        public string Q709_Input { get; set; }

        [JsonProperty("q7_1_input")]
        public string Q71_Input { get; set; }

        [JsonProperty("q7_11_input")]
        public string Q711_Input { get; set; }

        [JsonProperty("q7_12_input")]
        public string Q712_Input { get; set; }

        [JsonProperty("q7_13_input")]
        public string Q713_Input { get; set; }

        [JsonProperty("q7_14_input")]
        public string Q714_Input { get; set; }

        [JsonProperty("q7_15_input")]
        public string Q715_Input { get; set; }

        [JsonProperty("q7_16_input")]
        public string Q716_Input { get; set; }

        [JsonProperty("q7_18_input")]
        public string Q718_Input { get; set; }

        [JsonProperty("q7_19_input")]
        public string[] Q719_Input { get; set; }

        [JsonProperty("q7_2_input")]
        public string Q72_Input { get; set; }

        [JsonProperty("2_01_notes")]
        public string The2_01_Notes { get; set; }

        [JsonProperty("2_02a_notes")]
        public string The2_02ANotes { get; set; }

        [JsonProperty("2_02b_notes")]
        public string The2_02BNotes { get; set; }

        [JsonProperty("2_02c_notes")]
        public string The2_02CNotes { get; set; }

        [JsonProperty("2_02d_notes")]
        public string The2_02DNotes { get; set; }

        [JsonProperty("2_02e_notes")]
        public string The2_02ENotes { get; set; }

        [JsonProperty("2_02f_notes")]
        public string The2_02FNotes { get; set; }

        [JsonProperty("2_02g_notes")]
        public string The2_02GNotes { get; set; }

        [JsonProperty("2_02h_notes")]
        public string The2_02HNotes { get; set; }

        [JsonProperty("2_03a_notes")]
        public string The2_03ANotes { get; set; }

        [JsonProperty("2_03b_notes")]
        public string The2_03BNotes { get; set; }

        [JsonProperty("2_03c_notes")]
        public string The2_03CNotes { get; set; }

        [JsonProperty("2_03d_notes")]
        public string The2_03DNotes { get; set; }

        [JsonProperty("2_05a_notes")]
        public string The2_05ANotes { get; set; }

        [JsonProperty("2_05b_notes")]
        public string The2_05BNotes { get; set; }

        [JsonProperty("2_05c_notes")]
        public string The2_05CNotes { get; set; }

        [JsonProperty("2_06a_notes")]
        public string The2_06ANotes { get; set; }

        [JsonProperty("2_06b_notes")]
        public string The2_06BNotes { get; set; }

        [JsonProperty("2_06c_notes")]
        public string The2_06CNotes { get; set; }

        [JsonProperty("2_06d_notes")]
        public string The2_06DNotes { get; set; }

        [JsonProperty("2_06e_notes")]
        public string The2_06ENotes { get; set; }

        [JsonProperty("2_06f_notes")]
        public string The2_06FNotes { get; set; }

        [JsonProperty("2_7a_notes")]
        public string The2_7ANotes { get; set; }

        [JsonProperty("2_7b_notes")]
        public string The2_7BNotes { get; set; }

        [JsonProperty("2_7c_notes")]
        public string The2_7CNotes { get; set; }

        [JsonProperty("2_7d_notes")]
        public string The2_7DNotes { get; set; }

        [JsonProperty("2_7e_notes")]
        public string The2_7ENotes { get; set; }

        [JsonProperty("2_8a_notes")]
        public string The2_8ANotes { get; set; }

        [JsonProperty("2_8b_notes")]
        public string The2_8BNotes { get; set; }

        [JsonProperty("2_8c_notes")]
        public string The2_8CNotes { get; set; }

        [JsonProperty("2_8d_notes")]
        public string The2_8DNotes { get; set; }

        [JsonProperty("2_8e_notes")]
        public string The2_8ENotes { get; set; }

        [JsonProperty("2_9a_notes")]
        public string The2_9ANotes { get; set; }

        [JsonProperty("2_9b_notes")]
        public string The2_9BNotes { get; set; }

        [JsonProperty("2_9c_notes")]
        public string The2_9CNotes { get; set; }

        [JsonProperty("2_9d_notes")]
        public string The2_9DNotes { get; set; }

        [JsonProperty("2_9e_notes")]
        public string The2_9ENotes { get; set; }

        [JsonProperty("2_9f_notes")]
        public string The2_9FNotes { get; set; }

        [JsonProperty("2_10a_notes")]
        public string The2_10ANotes { get; set; }

        [JsonProperty("2_10b_notes")]
        public string The2_10BNotes { get; set; }

        [JsonProperty("2_10c_notes")]
        public string The2_10CNotes { get; set; }

        [JsonProperty("2_10d_notes")]
        public string The2_10DNotes { get; set; }

        [JsonProperty("2_11a_notes")]
        public string The2_11ANotes { get; set; }

        [JsonProperty("2_11b_notes")]
        public string The2_11BNotes { get; set; }

        [JsonProperty("2_11c_notes")]
        public string The2_11CNotes { get; set; }

        [JsonProperty("2_11d_notes")]
        public string The2_11DNotes { get; set; }

        [JsonProperty("2_11e_notes")]
        public string The2_11ENotes { get; set; }

        [JsonProperty("2_12a_notes")]
        public string The2_12ANotes { get; set; }

        [JsonProperty("2_12b_notes")]
        public string The2_12BNotes { get; set; }

        [JsonProperty("2_12c _notes")]
        public string The2_12CNotes { get; set; }

        [JsonProperty("2_13_notes")]
        public string The2_13_Notes { get; set; }

        [JsonProperty("3_5a_notes")]
        public string The3_5ANotes { get; set; }

        [JsonProperty("3_5b_notes")]
        public string The3_5BNotes { get; set; }

        [JsonProperty("3_5d_notes")]
        public string The3_5DNotes { get; set; }

        [JsonProperty("3_5e_notes")]
        public string The3_5ENotes { get; set; }

        [JsonProperty("3_5f_notes")]
        public string The3_5FNotes { get; set; }

        [JsonProperty("3_5g _notes")]
        public string The3_5GNotes { get; set; }

        [JsonProperty("3_5c_notes")]
        public string The3_5CNotes { get; set; }

        [JsonProperty("3_6a_notes")]
        public string The3_6ANotes { get; set; }

        [JsonProperty("3_6b_notes")]
        public string The3_6BNotes { get; set; }

        [JsonProperty("3_6c_notes")]
        public string The3_6CNotes { get; set; }

        [JsonProperty("3_6d_notes")]
        public string The3_6DNotes { get; set; }

        [JsonProperty("3_6e_notes")]
        public string The3_6ENotes { get; set; }

        [JsonProperty("3_7a_notes")]
        public string The3_7ANotes { get; set; }

        [JsonProperty("3_7 b_notes")]
        public string The3_7BNotes { get; set; }

        [JsonProperty("3_7 c_notes")]
        public string The3_7CNotes { get; set; }

        [JsonProperty("3_08_notes")]
        public string The3_08_Notes { get; set; }

        [JsonProperty("3_10a_notes")]
        public string The3_10ANotes { get; set; }

        [JsonProperty("3_10b_notes")]
        public string The3_10BNotes { get; set; }

        [JsonProperty("3_10c_notes")]
        public string The3_10CNotes { get; set; }

        [JsonProperty("3_10d_notes")]
        public string The3_10DNotes { get; set; }

        [JsonProperty("3_10e_notes")]
        public string The3_10ENotes { get; set; }

        [JsonProperty("3_10f_notes")]
        public string The3_10FNotes { get; set; }

        [JsonProperty("3_11a_notes")]
        public string The3_11ANotes { get; set; }

        [JsonProperty("3_11b_notes")]
        public string The3_11BNotes { get; set; }

        [JsonProperty("3_11c_notes")]
        public string The3_11CNotes { get; set; }

        [JsonProperty("3_11d_notes")]
        public string The3_11DNotes { get; set; }

        [JsonProperty("3_11e_notes")]
        public string The3_11ENotes { get; set; }

        [JsonProperty("3_12a_notes")]
        public string The3_12ANotes { get; set; }

        [JsonProperty("3_12b_notes")]
        public string The3_12BNotes { get; set; }

        [JsonProperty("3_12c_notes")]
        public string The3_12CNotes { get; set; }

        [JsonProperty("3_12d_notes")]
        public string The3_12DNotes { get; set; }

        [JsonProperty("3_12e_notes")]
        public string The3_12ENotes { get; set; }

        [JsonProperty("3_13a_notes")]
        public string The3_13ANotes { get; set; }

        [JsonProperty("3_13b_notes")]
        public string The3_13BNotes { get; set; }

        [JsonProperty("3_13c_notes")]
        public string The3_13CNotes { get; set; }

        [JsonProperty("3_13d_notes")]
        public string The3_13DNotes { get; set; }

        [JsonProperty("3_13e_notes")]
        public string The3_13ENotes { get; set; }

        [JsonProperty("3_13f_notes")]
        public string The3_13FNotes { get; set; }

        [JsonProperty("3_14a_notes")]
        public string The3_14ANotes { get; set; }

        [JsonProperty("3_14b_notes")]
        public string The3_14BNotes { get; set; }

        [JsonProperty("3_14c_notes")]
        public string The3_14CNotes { get; set; }

        [JsonProperty("3_14d_notes")]
        public string The3_14DNotes { get; set; }

        [JsonProperty("3_15a_notes")]
        public string The3_15ANotes { get; set; }

        [JsonProperty("3_15b_notes")]
        public string The3_15BNotes { get; set; }

        [JsonProperty("3_15c_notes")]
        public string The3_15CNotes { get; set; }

        [JsonProperty("3_15d_notes")]
        public string The3_15DNotes { get; set; }

        [JsonProperty("3_15e_notes")]
        public string The3_15ENotes { get; set; }

        [JsonProperty("3_16a_notes")]
        public string The3_16ANotes { get; set; }

        [JsonProperty("3_16b_notes")]
        public string The3_16BNotes { get; set; }

        [JsonProperty("3_16c _notes")]
        public string The3_16CNotes { get; set; }

        [JsonProperty("3_17_notes")]
        public string The3_17_Notes { get; set; }

        [JsonProperty("3_18_notes")]
        public string The3_18_Notes { get; set; }

        [JsonProperty("3_19_notes")]
        public string The3_19_Notes { get; set; }

        [JsonProperty("4_1a_notes")]
        public string The4_1ANotes { get; set; }

        [JsonProperty("4_1b_notes")]
        public string The4_1BNotes { get; set; }

        [JsonProperty("4_1c_notes")]
        public string The4_1CNotes { get; set; }

        [JsonProperty("4_1d_notes")]
        public string The4_1DNotes { get; set; }

        [JsonProperty("4_1e_notes")]
        public string The4_1ENotes { get; set; }

        [JsonProperty("4_2a_notes")]
        public string The4_2ANotes { get; set; }

        [JsonProperty("4_2b _notes")]
        public string The4_2BNotes { get; set; }

        [JsonProperty("4_2c_notes")]
        public string The4_2CNotes { get; set; }

        [JsonProperty("4_2d_notes")]
        public string The4_2DNotes { get; set; }

        [JsonProperty("4_2e _notes")]
        public string The4_2ENotes { get; set; }

        [JsonProperty("4_3a_notes")]
        public string The4_3ANotes { get; set; }

        [JsonProperty("4_3b _notes")]
        public string The4_3BNotes { get; set; }

        [JsonProperty("4_3c_notes")]
        public string The4_3CNotes { get; set; }

        [JsonProperty("4_3d_notes")]
        public string The4_3DNotes { get; set; }

        [JsonProperty("4_3e _notes")]
        public string The4_3ENotes { get; set; }

        [JsonProperty("4_4a_notes")]
        public string The4_4ANotes { get; set; }

        [JsonProperty("4_4b _notes")]
        public string The4_4BNotes { get; set; }

        [JsonProperty("4_4c_notes")]
        public string The4_4CNotes { get; set; }

        [JsonProperty("4_4d_notes")]
        public string The4_4DNotes { get; set; }

        [JsonProperty("4_4e _notes")]
        public string The4_4ENotes { get; set; }

        [JsonProperty("4_5a_notes")]
        public string The4_5ANotes { get; set; }

        [JsonProperty("4_5b _notes")]
        public string The4_5BNotes { get; set; }

        [JsonProperty("4_5c_notes")]
        public string The4_5CNotes { get; set; }

        [JsonProperty("4_5d_notes")]
        public string The4_5DNotes { get; set; }

        [JsonProperty("4_5e _notes")]
        public string The4_5ENotes { get; set; }

        [JsonProperty("5_01_notes")]
        public string The5_01_Notes { get; set; }

        [JsonProperty("5_02_notes")]
        public string The5_02_Notes { get; set; }

        [JsonProperty("5_03_notes")]
        public string The5_03_Notes { get; set; }
        [JsonProperty("selected")]
        public string[] Selected { get; set; }
    }

    public partial class FormData
    {
        public static FormData FromJson(string json) => JsonConvert.DeserializeObject<FormData>(json, Converter.Settings);
    }

    public static class Serialize
    {
        public static string ToJson(this FormData self) => JsonConvert.SerializeObject(self, Converter.Settings);
    }

    public class Converter
    {
        public static readonly JsonSerializerSettings Settings = new JsonSerializerSettings
        {
            MetadataPropertyHandling = MetadataPropertyHandling.Ignore,
            DateParseHandling = DateParseHandling.None,
        };
    }
}
