# AI Agent 完整学习路径指南

> 本指南提供了一个完整的AI Agent学习路径，从零基础到高级应用，包含理论学习、实践项目和生产部署的全流程指导。

## 📋 学习路径概览

| 阶段 | 时间 | 重点内容 | 实践项目 |
|------|------|----------|----------|
| 第一阶段 | 2-3周 | 基础概念与理论 | 简单问答Agent |
| 第二阶段 | 3-4周 | 核心技术栈 | RAG知识助手 |
| 第三阶段 | 4-5周 | 高级Agent模式 | 智能客服系统 |
| 第四阶段 | 3-4周 | 多Agent协作 | 内容创作团队 |
| 第五阶段 | 4-5周 | 进阶技术与优化 | 企业级Agent平台 |
| 第六阶段 | 3-4周 | 生产部署与实战 | 行业解决方案 |

**总计学习时间：18-22周（4-5个月）**
**建议每周投入：15-20小时**

## 🎯 第一阶段：基础概念与理论（2-3周）

### 学习目标
- 理解AI Agent的基本概念和架构
- 掌握Prompt Engineering基础技能
- 了解Function Calling机制
- 建立Agent开发的思维框架

### 理论学习

#### 1.1 AI Agent基础概念（第1周）
**核心概念**
- Agent定义：感知环境、推理决策、执行动作的智能体
- Agent vs ChatBot：主动性、工具使用、任务规划的区别
- Agent组成要素：Perception（感知）、Planning（规划）、Action（行动）

**关键架构模式**
- **ReAct模式**：Reasoning + Acting的循环
- **Plan-and-Execute**：先规划后执行
- **Reflexion**：通过反思改进性能

**必读资料**
- 论文：[ReAct: Synergizing Reasoning and Acting in Language Models](https://arxiv.org/abs/2210.03629)
- 博客：OpenAI Function Calling指南
- 视频：Andrew Ng的AI Agent课程（DeepLearning.AI）

#### 1.2 Prompt Engineering（第1-2周）
**基础技巧**
- Zero-shot vs Few-shot prompting
- Chain-of-Thought (CoT) prompting
- Role-based prompting
- System message设计

**高级技巧**
- Self-consistency decoding
- Tree of Thoughts (ToT)
- Prompt chaining
- Error handling strategies

**实践练习**
```python
# 练习1：设计一个数学推理Agent的Prompt
system_prompt = """
You are a mathematical reasoning assistant.
When solving problems:
1. Break down the problem into steps
2. Show your reasoning for each step
3. Double-check your calculations
4. Provide the final answer clearly
"""

# 练习2：设计Function Calling的描述
function_schema = {
    "name": "get_weather",
    "description": "Get current weather information for a city",
    "parameters": {
        "type": "object",
        "properties": {
            "city": {"type": "string", "description": "City name"},
            "unit": {"type": "string", "enum": ["celsius", "fahrenheit"]}
        }
    }
}
```

#### 1.3 Function Calling与Tool Use（第2周）
**核心机制**
- OpenAI Function Calling API
- Tool description格式
- 参数提取与验证
- 结果处理与反馈

**常用工具类型**
- 信息检索：搜索引擎、知识库查询
- 数据处理：计算器、数据分析
- 外部服务：邮件发送、日历管理
- 系统操作：文件读写、API调用

### 实践项目1：简单问答Agent

#### 项目描述
构建一个能够回答问题并使用多种工具的基础Agent系统。

#### 技术栈
- Python 3.8+
- OpenAI API / Azure OpenAI
- Requests库（API调用）
- Streamlit（可选的Web界面）

#### 功能需求
1. **基础对话**：支持多轮对话
2. **天气查询**：集成天气API
3. **数学计算**：实现计算器功能
4. **网络搜索**：集成搜索引擎API
5. **记忆功能**：维护对话历史

#### 实现步骤

**Step 1: 环境搭建**
```bash
# 创建项目目录
mkdir simple-qa-agent
cd simple-qa-agent

# 创建虚拟环境
python -m venv venv
source venv/bin/activate  # Windows: venv\\Scripts\\activate

# 安装依赖
pip install openai requests python-dotenv streamlit
```

**Step 2: 核心Agent实现**
```python
# agent.py
import openai
import json
import requests
from typing import List, Dict, Any

class SimpleQAAgent:
    def __init__(self, api_key: str):
        self.client = openai.OpenAI(api_key=api_key)
        self.conversation_history = []
        self.tools = self._setup_tools()

    def _setup_tools(self):
        return [
            {
                "type": "function",
                "function": {
                    "name": "get_weather",
                    "description": "Get current weather for a city",
                    "parameters": {
                        "type": "object",
                        "properties": {
                            "city": {"type": "string", "description": "City name"},
                            "unit": {"type": "string", "enum": ["metric", "imperial"], "default": "metric"}
                        },
                        "required": ["city"]
                    }
                }
            },
            {
                "type": "function",
                "function": {
                    "name": "calculate",
                    "description": "Perform mathematical calculations",
                    "parameters": {
                        "type": "object",
                        "properties": {
                            "expression": {"type": "string", "description": "Mathematical expression to evaluate"}
                        },
                        "required": ["expression"]
                    }
                }
            },
            {
                "type": "function",
                "function": {
                    "name": "web_search",
                    "description": "Search the web for information",
                    "parameters": {
                        "type": "object",
                        "properties": {
                            "query": {"type": "string", "description": "Search query"}
                        },
                        "required": ["query"]
                    }
                }
            }
        ]

    def get_weather(self, city: str, unit: str = "metric") -> str:
        """获取天气信息"""
        # 这里需要替换为实际的天气API
        api_key = "your_weather_api_key"
        url = f"http://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}&units={unit}"

        try:
            response = requests.get(url)
            data = response.json()

            if response.status_code == 200:
                weather = data['weather'][0]['description']
                temp = data['main']['temp']
                unit_symbol = "°C" if unit == "metric" else "°F"
                return f"The weather in {city} is {weather} with temperature {temp}{unit_symbol}"
            else:
                return f"Could not get weather for {city}: {data.get('message', 'Unknown error')}"
        except Exception as e:
            return f"Error getting weather: {str(e)}"

    def calculate(self, expression: str) -> str:
        """执行数学计算"""
        try:
            # 安全的数学表达式求值
            import ast
            import operator

            # 支持的操作符
            ops = {
                ast.Add: operator.add,
                ast.Sub: operator.sub,
                ast.Mult: operator.mul,
                ast.Div: operator.truediv,
                ast.Pow: operator.pow,
                ast.Mod: operator.mod,
                ast.USub: operator.neg,
            }

            def eval_expr(node):
                if isinstance(node, ast.Constant):
                    return node.value
                elif isinstance(node, ast.BinOp):
                    return ops[type(node.op)](eval_expr(node.left), eval_expr(node.right))
                elif isinstance(node, ast.UnaryOp):
                    return ops[type(node.op)](eval_expr(node.operand))
                else:
                    raise TypeError(f"Unsupported operation: {type(node)}")

            result = eval_expr(ast.parse(expression, mode='eval').body)
            return f"The result of {expression} is {result}"
        except Exception as e:
            return f"Error calculating {expression}: {str(e)}"

    def web_search(self, query: str) -> str:
        """网络搜索（简化版本）"""
        # 这里可以集成实际的搜索API，如Bing Search API或Google Custom Search
        return f"Search results for '{query}': [This is a placeholder. Integrate with actual search API]"

    def execute_tool(self, tool_name: str, **kwargs) -> str:
        """执行工具函数"""
        tool_methods = {
            "get_weather": self.get_weather,
            "calculate": self.calculate,
            "web_search": self.web_search
        }

        if tool_name in tool_methods:
            return tool_methods[tool_name](**kwargs)
        else:
            return f"Unknown tool: {tool_name}"

    def chat(self, user_message: str) -> str:
        """主要的对话方法"""
        # 添加用户消息到历史
        self.conversation_history.append({"role": "user", "content": user_message})

        # 调用OpenAI API
        response = self.client.chat.completions.create(
            model="gpt-4",
            messages=[
                {"role": "system", "content": "You are a helpful assistant with access to various tools. Use them when appropriate to help the user."},
                *self.conversation_history
            ],
            tools=self.tools,
            tool_choice="auto"
        )

        message = response.choices[0].message

        # 处理工具调用
        if message.tool_calls:
            # 添加助手消息（包含工具调用）
            self.conversation_history.append({
                "role": "assistant",
                "content": message.content,
                "tool_calls": [{"id": tc.id, "type": tc.type, "function": {"name": tc.function.name, "arguments": tc.function.arguments}} for tc in message.tool_calls]
            })

            # 执行工具并收集结果
            for tool_call in message.tool_calls:
                function_name = tool_call.function.name
                function_args = json.loads(tool_call.function.arguments)

                result = self.execute_tool(function_name, **function_args)

                # 添加工具结果到历史
                self.conversation_history.append({
                    "role": "tool",
                    "tool_call_id": tool_call.id,
                    "content": result
                })

            # 获取最终回复
            final_response = self.client.chat.completions.create(
                model="gpt-4",
                messages=[
                    {"role": "system", "content": "You are a helpful assistant. Based on the tool results, provide a comprehensive answer to the user."},
                    *self.conversation_history
                ]
            )

            final_message = final_response.choices[0].message.content
            self.conversation_history.append({"role": "assistant", "content": final_message})
            return final_message
        else:
            # 没有工具调用，直接返回回复
            self.conversation_history.append({"role": "assistant", "content": message.content})
            return message.content
```

**Step 3: Web界面（可选）**
```python
# app.py
import streamlit as st
from agent import SimpleQAAgent
import os
from dotenv import load_dotenv

load_dotenv()

st.title("Simple QA Agent")
st.write("一个能够使用工具的智能问答助手")

# 初始化Agent
if "agent" not in st.session_state:
    api_key = os.getenv("OPENAI_API_KEY")
    if not api_key:
        st.error("请设置OPENAI_API_KEY环境变量")
        st.stop()
    st.session_state.agent = SimpleQAAgent(api_key)

if "messages" not in st.session_state:
    st.session_state.messages = []

# 显示对话历史
for message in st.session_state.messages:
    with st.chat_message(message["role"]):
        st.markdown(message["content"])

# 用户输入
if prompt := st.chat_input("请输入您的问题"):
    # 显示用户消息
    with st.chat_message("user"):
        st.markdown(prompt)
    st.session_state.messages.append({"role": "user", "content": prompt})

    # 获取Agent回复
    with st.chat_message("assistant"):
        with st.spinner("思考中..."):
            response = st.session_state.agent.chat(prompt)
        st.markdown(response)
    st.session_state.messages.append({"role": "assistant", "content": response})
```

**Step 4: 配置文件**
```bash
# .env
OPENAI_API_KEY=your_openai_api_key_here
WEATHER_API_KEY=your_weather_api_key_here
```

```python
# requirements.txt
openai>=1.0.0
requests>=2.31.0
python-dotenv>=1.0.0
streamlit>=1.28.0
```

#### 测试用例
1. **基础对话**：
   - "你好，你能做什么？"
   - "你的名字是什么？"

2. **天气查询**：
   - "北京今天天气怎么样？"
   - "纽约的温度是多少？"

3. **数学计算**：
   - "计算 15 * 24 + 36"
   - "2的8次方是多少？"

4. **综合测试**：
   - "如果北京今天温度是25度，转换成华氏度是多少？"

#### 扩展建议
1. **更多工具**：日历查询、邮件发送、文件操作
2. **记忆优化**：实现长期记忆存储
3. **错误处理**：更robust的异常处理机制
4. **用户界面**：更美观的前端界面

### 学习检查点
完成第一阶段后，你应该能够：
- [ ] 解释AI Agent的基本概念和架构
- [ ] 编写有效的system prompt和function descriptions
- [ ] 实现基础的tool calling功能
- [ ] 构建简单的对话Agent
- [ ] 理解ReAct模式的工作原理

### 推荐阅读
- 📖 《Building LLM-Powered Applications》
- 📄 ReAct论文及相关工作
- 🎥 DeepLearning.AI的AI Agent课程
- 📚 OpenAI Cookbook中的Agent示例

---

*下一阶段我们将学习更复杂的技术栈，包括LangChain、向量数据库和RAG系统。*