"use server";

import { connectToDB } from "../connect.db";
import Exps from "../models/Experience";
import ProjectModel from "../models/Projects";
import SkillModel from "../models/Skills";
import Testimonial from "../models/Testimonials";

export async function createSkill(param: any) {
  try {
    await connectToDB();
    const skill = await SkillModel.create({
      name: param.name,
      thumbnailUrl: param.image,
    });
    console.log(skill);
  } catch (error) {
    console.log(error);
  }
}

export async function fetchSkills() {
  try {
    await connectToDB();
    const skills = await SkillModel.find();
    return JSON.parse(JSON.stringify(skills));
  } catch (error) {
    console.error(error);
  }
}

export async function createprojects(param: any) {
  try {
    await connectToDB();
    const project = await ProjectModel.create({
      name: param.name,
      thumbnailUrl: param.thumbnailUrl,
      tools: param.tools,
      description: param.description,
      links: param.links,
    });
    console.log(project);
  } catch (error) {
    console.log(error);
  }
}

export async function fetchProjects() {
  connectToDB();
  try {
    const projects = await ProjectModel.find();
    return JSON.parse(JSON.stringify(projects));
  } catch (error) {
    console.error(error);
  }
}

export async function fetchProjectbyId(id: string) {
  connectToDB();
  try {
    const projects = await ProjectModel.find({ _id: id });
    return JSON.parse(JSON.stringify(projects));
  } catch (error) {
    console.error(error);
  }
}

export async function createExp(param: any) {
  try {
    await connectToDB();
    const exp = await Exps.create({
      jobTitle: param.jobTitle,
      companyName: param.companyName,
      companyBrief: param.companyBrief,
      startDate: param.startDate,
      endDate: param.endDate,
    });
    console.log(exp);
  } catch (error) {
    console.log(error);
  }
}

export async function fetcchExp() {
  try {
    await connectToDB();
    const exps = await Exps.find();
    return JSON.parse(JSON.stringify(exps));
  } catch (error) {
    console.error(error);
  }
}

export async function createTestimony(param: any) {
  try {
    await connectToDB();
    const testimony = await Testimonial.create({
      testimonier: param.testimonier,
      testimony: param.testimony,
    });
    console.log(testimony);
  } catch (error) {
    console.log(error);
  }
}

export async function fetchTestimony() {
  try {
    await connectToDB();
    const testimony = await Testimonial.find();
    return JSON.parse(JSON.stringify(testimony));
  } catch (error) {
    console.error(error);
  }
}
