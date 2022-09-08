import { Service } from 'egg';

export default class MenuService extends Service {
  /**
   * 获取用户菜单
   */
  public async getMenus() {
  
  }

  /**
   * 获取所有页面配置
   */
  public getMenuConfig() {
    return [
      {
        name: "首页",
        sign: "manage.menu.index",
        url: "",
      },
      {
        name: "管理中心",
        sign: "manage.menu.management",
        url: "",
        subMenus: [
          {
            name: "个人中心",
            parent: "manage.menu.management",
            sign: "manage.menu.personalCenter",
            url: "",
          },
          {
            name: "用户管理",
            parent: "manage.menu.management",
            sign: "manage.menu.userManagement",
            url: "",
          },
          {
            name: "角色管理",
            parent: "manage.menu.management",
            sign: "manage.menu.roleManagement",
            url: "",
          }
        ]
      },
      {
        name: '学期准备',
        sign: 'manage.menu.paper',
        url: "",
        subMenus: [
          {
            name: '试卷管理',
            parent: "manage.menu.paper",
            sign: 'manage.menu.testPaperManage',
            url: "",
          },
          {
            name: '题目管理',
            parent: "manage.menu.paper",
            sign: 'manage.menu.testQuestion',
            url: "",
          },
          {
            name: '题库管理',
            parent: "manage.menu.paper",
            sign: 'manage.menu.questionBank',
            url: "",
          }
        ]
      }
    ]
  }
}