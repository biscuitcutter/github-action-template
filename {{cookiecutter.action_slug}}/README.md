# {{ cookiecutter.action_name }}

{{ cookiecutter.action_description }}

## Usage

```yaml
- uses: {{ cookiecutter.github_username }}/{{ cookiecutter.action_slug }}@v1
  with:
    example-input: 'your-value'
```

## Inputs

| Name | Description | Required | Default |
|------|-------------|----------|---------|
| `example-input` | An example input parameter | No | `default-value` |

## Outputs

| Name | Description |
|------|-------------|
| `example-output` | An example output value |

## Example Workflow

```yaml
name: Example Workflow

on:
  push:
    branches: [main]

jobs:
  example:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Run {{ cookiecutter.action_name }}
        id: my-action
        uses: {{ cookiecutter.github_username }}/{{ cookiecutter.action_slug }}@v1
        with:
          example-input: 'hello-world'

      - name: Use output
        run: echo "Output was: ${{ "{{" }} steps.my-action.outputs.example-output {{ "}}" }}"
```

## Development

### Setup

```bash
npm install
```

### Build

```bash
npm run build
```

### Test

```bash
npm run test
```

### Lint

```bash
npm run lint
```

## License

MIT © [{{ cookiecutter.author_name }}](https://github.com/{{ cookiecutter.github_username }})
